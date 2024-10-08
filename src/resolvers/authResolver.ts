import { Resolver, Mutation, Arg } from "type-graphql";
import * as bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { GraphQLError } from "graphql";
import { UserRole } from "../../prisma/generated/type-graphql";
import { generateOTP, sendOTPToMobile } from "../utils/otpGenerator";
import { generateToken } from "../utils/jwtToken";
import { sendResetEmail } from "../utils/sendResetEmail";
import {
  validateName,
  validateEmail,
  validateMobileNumber,
  validatePassword,
  validateRole,
} from "../utils/validation";
import prisma from "../libs/prisma.config";

@Resolver()
export class AuthResolver {
  @Mutation(() => String)
  async signup(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("mobileNo") mobileNo: string,
    @Arg("password") password: string,
    @Arg("role", { defaultValue: UserRole.PATIENT }) role: UserRole
  ): Promise<string> {
    try {
      if (!name || !email || !mobileNo || !password || !role) {
        throw new GraphQLError(
          "All fields (name, email, mobileNo, password, role) are required."
        );
      }
      validateName(name);
      validateEmail(email);
      validateMobileNumber(mobileNo);
      validatePassword(password);
      validateRole(role);

      const existingUserByEmail = await prisma.user.findUnique({
        where: { email },
      });
      if (existingUserByEmail) {
        throw new GraphQLError("Email already in use.");
      }

      const existingUserByMobile = await prisma.user.findUnique({
        where: { mobileNo },
      });
      if (existingUserByMobile) {
        throw new GraphQLError("Mobile number already in use.");
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      await prisma.user.create({
        data: {
          id: uuidv4(),
          name,
          email,
          mobileNo,
          password: hashedPassword,
          role,
        },
      });

      return "User signed up successfully.";
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError("Failed to sign up. Please try again.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }

  @Mutation(() => String)
  async loginWithEmail(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<string> {
    try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user || !user.password) {
        const errorMessage = !user
          ? "User not found."
          : "No password set for this user.";
        throw new GraphQLError(errorMessage);
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new GraphQLError("Invalid password.");
      }

      return generateToken({ id: user.id, role: user.role });
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      console.error("Login with email error: ", error);
      throw new GraphQLError("Failed to log in with email. Please try again.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }


  // @Mutation(() => String)
  // async loginWithMobile(
  //   @Arg("mobileNo") mobileNo: string,
  //   @Arg("otp", { nullable: true }) otp?: string
  // ): Promise<string> {
  //   try {
  //     const user = await prisma.user.findUnique({ where: { mobileNo } });
  //     if (!user) {
  //       throw new GraphQLError(
  //         "User not found. Please check the phone number and try again."
  //       );
  //     }
  //     if (!otp) {
  //       const generatedOtp = generateOTP();
  //       await sendOTPToMobile(user.mobileNo as string, generatedOtp);
  //       await prisma.user.update({
  //         where: { id: user.id },
  //         data: {
  //           otp: generatedOtp,
  //           otpExpires: new Date(Date.now() + 15 * 60 * 1000),
  //         },
  //       });
  //       return "OTP sent to mobile number.";
  //     }
  //     if (
  //       otp !== user.otp ||
  //       (user.otpExpires && user.otpExpires < new Date())
  //     ) {
  //       throw new GraphQLError("Invalid or expired OTP.");
  //     }
  //     await prisma.user.update({
  //       where: { id: user.id },
  //       data: { otp: null, otpExpires: null },
  //     });
  //     return generateToken({ id: user.id, role: user.role });
  //   } catch (error) {
  //     if (error instanceof GraphQLError) {
  //       throw error;
  //     }
  //     throw new GraphQLError(
  //       "Failed to log in with mobile number. Please try again.",
  //       {
  //         extensions: { code: "INTERNAL_SERVER_ERROR" },
  //       }
  //     );
  //   }
  // }

  @Mutation(() => String)
  async loginWithMobile(
    @Arg("mobileNo") mobileNo: string,
    @Arg("otp", { nullable: true }) otp?: string
  ): Promise<string> {
    try {
      // Array of mobile numbers for which we want to use the Twilio service
      const fixedOtpMobileNumbers = ["+923037323452", "0987654321"]; // Replace with your array of numbers
  
      const user = await prisma.user.findUnique({ where: { mobileNo } });
      if (!user) {
        throw new GraphQLError(
          "User not found. Please check the phone number and try again."
        );
      }
  
      // If OTP is not provided, decide whether to send OTP using Twilio or use the fixed OTP
      if (!otp) {
        let generatedOtp: string;
        
        if (fixedOtpMobileNumbers.includes(mobileNo)) {
          // If the number is in the array, use Twilio to send the OTP
          generatedOtp = generateOTP();  // Generate a random OTP
          await sendOTPToMobile(user.mobileNo as string, generatedOtp);  // Send the generated OTP using Twilio
          await prisma.user.update({
            where: { id: user.id },
            data: {
              otp: generatedOtp,  // Store the sent OTP
              otpExpires: new Date(Date.now() + 15 * 60 * 1000),  // Set expiry to 15 minutes from now
            },
          });
          return "OTP sent to mobile number.";
        } else {
          // Use the fixed OTP
          generatedOtp = "12345";
          await prisma.user.update({
            where: { id: user.id },
            data: {
              otp: generatedOtp,  // Store the fixed OTP
              otpExpires: new Date(Date.now() + 15 * 60 * 1000),  // Set expiry to 15 minutes from now
            },
          });
          return "OTP is 12345 as your number is not registered in Twilio.";
        }
      }
  
      // Check if provided OTP is correct and not expired
      if (
        otp !== user.otp ||
        (user.otpExpires && user.otpExpires < new Date())
      ) {
        throw new GraphQLError("Invalid or expired OTP.");
      }
  
      // Clear OTP and expiration time after successful verification
      await prisma.user.update({
        where: { id: user.id },
        data: { otp: null, otpExpires: null },
      });
  
      // Generate and return a token
      return generateToken({ id: user.id, role: user.role });
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError(
        "Failed to log in with mobile number. Please try again.",
        {
          extensions: { code: "INTERNAL_SERVER_ERROR" },
        }
      );
    }
  }
  
  

  @Mutation(() => String)
  async resendOtp(@Arg("mobileNo") mobileNo: string): Promise<string> {
    try {
      const user = await prisma.user.findUnique({
        where: { mobileNo },
      });

      if (!user) {
        throw new GraphQLError("User not found.");
      }

      const otp = generateOTP();
      await sendOTPToMobile(mobileNo, otp);

      await prisma.user.update({
        where: { mobileNo },
        data: {
          otp,
          otpExpires: new Date(Date.now() + 15 * 60 * 1000),
        },
      });

      return "OTP sent to mobile number.";
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError("Failed to resend OTP. Please try again.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }

  @Mutation(() => String)
  async forgetPassword(
    @Arg("email", { nullable: true }) email?: string,
    @Arg("mobileNo", { nullable: true }) mobileNo?: string
  ): Promise<string> {
    try {
      if (!email && !mobileNo) {
        throw new GraphQLError(
          "Please provide either an email or mobile number."
        );
      }

      let user;
      if (email) {
        user = await prisma.user.findUnique({ where: { email } });
        if (!user) throw new GraphQLError("No user found with this email.");
      } else if (mobileNo) {
        user = await prisma.user.findUnique({ where: { mobileNo } });
        if (!user)
          throw new GraphQLError("No user found with this mobile number.");
      }

      const resetToken = generateOTP();
      const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

      await prisma.user.update({
        where: { id: user?.id },
        data: { otp: resetToken, otpExpires: expiresAt },
      });

      if (email) {
        await sendResetEmail(email, resetToken);
        return "Password reset email sent successfully.";
      } else if (mobileNo) {
        await sendOTPToMobile(mobileNo, resetToken);
        return "Password reset OTP sent successfully.";
      }

      throw new GraphQLError("Error occurred while sending reset information.");
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError(
        "Failed to initiate password reset. Please try again.",
        {
          extensions: { code: "INTERNAL_SERVER_ERROR" },
        }
      );
    }
  }

  @Mutation(() => String)
  async resetPassword(
    @Arg("token") token: string,
    @Arg("newPassword") newPassword: string
  ): Promise<string> {
    try {
      validatePassword(newPassword);
      const user = await prisma.user.findFirst({
        where: {
          otp: token,
          otpExpires: { gt: new Date() },
        },
      });

      if (!user) {
        throw new GraphQLError("Invalid or expired reset token.");
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      await prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword, otp: null, otpExpires: null },
      });

      return "Password reset successful. You can now log in with your new password.";
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError("Failed to reset password. Please try again.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }
}
