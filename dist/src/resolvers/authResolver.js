"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const type_graphql_1 = require("type-graphql");
const bcrypt = __importStar(require("bcryptjs"));
const uuid_1 = require("uuid");
const graphql_1 = require("graphql");
const type_graphql_2 = require("../../prisma/generated/type-graphql");
const otpGenerator_1 = require("../utils/otpGenerator");
const jwtToken_1 = require("../utils/jwtToken");
const sendResetEmail_1 = require("../utils/sendResetEmail");
const validation_1 = require("../utils/validation");
const prisma_config_1 = __importDefault(require("../libs/prisma.config"));
const types_1 = require("../types/types");
let AuthResolver = class AuthResolver {
    async signup(name, email, mobileNo, password, role) {
        try {
            if (!name || !email || !mobileNo || !password || !role) {
                throw new graphql_1.GraphQLError("All fields (name, email, mobileNo, password, role) are required.");
            }
            (0, validation_1.validateName)(name);
            (0, validation_1.validateEmail)(email);
            (0, validation_1.validateMobileNumber)(mobileNo);
            (0, validation_1.validatePassword)(password);
            (0, validation_1.validateRole)(role);
            const existingUserByEmail = await prisma_config_1.default.user.findUnique({
                where: { email },
            });
            if (existingUserByEmail) {
                throw new graphql_1.GraphQLError("Email already in use.");
            }
            const existingUserByMobile = await prisma_config_1.default.user.findUnique({
                where: { mobileNo },
            });
            if (existingUserByMobile) {
                throw new graphql_1.GraphQLError("Mobile number already in use.");
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            await prisma_config_1.default.user.create({
                data: {
                    id: (0, uuid_1.v4)(),
                    name,
                    email,
                    mobileNo,
                    password: hashedPassword,
                    role,
                },
            });
            return "User signed up successfully.";
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError("Failed to sign up. Please try again.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
    async loginWithEmail(email, password) {
        try {
            const user = await prisma_config_1.default.user.findUnique({ where: { email } });
            if (!user || !user.password) {
                const errorMessage = !user
                    ? "User not found."
                    : "No password set for this user.";
                throw new graphql_1.GraphQLError(errorMessage);
            }
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                throw new graphql_1.GraphQLError("Invalid password.");
            }
            const accessToken = (0, jwtToken_1.generateAccessToken)({ id: user.id, role: user.role });
            const refreshToken = (0, jwtToken_1.generateRefreshToken)({
                id: user.id,
                role: user.role,
            });
            return {
                user,
                accessToken,
                refreshToken,
            };
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            console.error("Login with email error: ", error);
            throw new graphql_1.GraphQLError("Failed to log in with email. Please try again.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
    async loginWithMobile(mobileNo, otp) {
        try {
            const fixedOtpMobileNumbers = ["+923037323452", "0987654321"];
            const user = await prisma_config_1.default.user.findUnique({ where: { mobileNo } });
            if (!user) {
                throw new graphql_1.GraphQLError("User not found. Please check the phone number and try again.");
            }
            if (!otp) {
                let generatedOtp;
                if (fixedOtpMobileNumbers.includes(mobileNo)) {
                    generatedOtp = (0, otpGenerator_1.generateOTP)();
                    await (0, otpGenerator_1.sendOTPToMobile)(user.mobileNo, generatedOtp);
                }
                else {
                    generatedOtp = "12345";
                }
                await prisma_config_1.default.user.update({
                    where: { id: user.id },
                    data: {
                        otp: generatedOtp,
                        otpExpires: new Date(Date.now() + 15 * 60 * 1000),
                    },
                });
                return {
                    user,
                    accessToken: "",
                    refreshToken: "",
                    message: fixedOtpMobileNumbers.includes(mobileNo)
                        ? "OTP sent to mobile number."
                        : "OTP is 12345 as your number is not registered in Twilio.",
                };
            }
            if (otp !== user.otp ||
                (user.otpExpires && user.otpExpires < new Date())) {
                throw new graphql_1.GraphQLError("Invalid or expired OTP.");
            }
            await prisma_config_1.default.user.update({
                where: { id: user.id },
                data: { otp: null, otpExpires: null },
            });
            const accessToken = (0, jwtToken_1.generateAccessToken)({ id: user.id, role: user.role });
            const refreshToken = (0, jwtToken_1.generateRefreshToken)({
                id: user.id,
                role: user.role,
            });
            return {
                user,
                accessToken,
                refreshToken,
                message: "Login successful.",
            };
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError("Failed to log in with mobile number. Please try again.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
    async resendOtp(mobileNo) {
        try {
            const user = await prisma_config_1.default.user.findUnique({
                where: { mobileNo },
            });
            if (!user) {
                throw new graphql_1.GraphQLError("User not found.");
            }
            const otp = (0, otpGenerator_1.generateOTP)();
            await (0, otpGenerator_1.sendOTPToMobile)(mobileNo, otp);
            await prisma_config_1.default.user.update({
                where: { mobileNo },
                data: {
                    otp,
                    otpExpires: new Date(Date.now() + 15 * 60 * 1000),
                },
            });
            return "OTP sent to mobile number.";
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError("Failed to resend OTP. Please try again.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
    async forgetPassword(email, mobileNo) {
        try {
            if (!email && !mobileNo) {
                throw new graphql_1.GraphQLError("Please provide either an email or mobile number.");
            }
            let user;
            if (email) {
                user = await prisma_config_1.default.user.findUnique({ where: { email } });
                if (!user)
                    throw new graphql_1.GraphQLError("No user found with this email.");
            }
            else if (mobileNo) {
                user = await prisma_config_1.default.user.findUnique({ where: { mobileNo } });
                if (!user)
                    throw new graphql_1.GraphQLError("No user found with this mobile number.");
            }
            const resetToken = (0, otpGenerator_1.generateOTP)();
            const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
            await prisma_config_1.default.user.update({
                where: { id: user?.id },
                data: { otp: resetToken, otpExpires: expiresAt },
            });
            if (email) {
                await (0, sendResetEmail_1.sendResetEmail)(email, resetToken);
                return "Password reset email sent successfully.";
            }
            else if (mobileNo) {
                await (0, otpGenerator_1.sendOTPToMobile)(mobileNo, resetToken);
                return "Password reset OTP sent successfully.";
            }
            throw new graphql_1.GraphQLError("Error occurred while sending reset information.");
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError("Failed to initiate password reset. Please try again.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
    async resetPassword(token, newPassword) {
        try {
            (0, validation_1.validatePassword)(newPassword);
            const user = await prisma_config_1.default.user.findFirst({
                where: {
                    otp: token,
                    otpExpires: { gt: new Date() },
                },
            });
            if (!user) {
                throw new graphql_1.GraphQLError("Invalid or expired reset token.");
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);
            await prisma_config_1.default.user.update({
                where: { id: user.id },
                data: { password: hashedPassword, otp: null, otpExpires: null },
            });
            return "Password reset successful. You can now log in with your new password.";
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError("Failed to reset password. Please try again.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
};
exports.AuthResolver = AuthResolver;
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __param(1, (0, type_graphql_1.Arg)("email")),
    __param(2, (0, type_graphql_1.Arg)("mobileNo")),
    __param(3, (0, type_graphql_1.Arg)("password")),
    __param(4, (0, type_graphql_1.Arg)("role", { defaultValue: type_graphql_2.UserRole.PATIENT })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signup", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.LoginResponse),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __param(1, (0, type_graphql_1.Arg)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "loginWithEmail", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.LoginResponse),
    __param(0, (0, type_graphql_1.Arg)("mobileNo")),
    __param(1, (0, type_graphql_1.Arg)("otp", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "loginWithMobile", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("mobileNo")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "resendOtp", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("email", { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)("mobileNo", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "forgetPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("token")),
    __param(1, (0, type_graphql_1.Arg)("newPassword")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "resetPassword", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AuthResolver);
