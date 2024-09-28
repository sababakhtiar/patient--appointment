"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = sendMail;
const nodemailer_1 = __importDefault(require("nodemailer"));
// Create transporter once and reuse it
const transporter = nodemailer_1.default.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});
// Reusable mail-sending function
async function sendMail(to, subject, html) {
    try {
        const mailOptions = {
            from: process.env.SMTP_USER,
            to,
            subject,
            html,
        };
        const info = await transporter.sendMail(mailOptions);
        return info.response;
    }
    catch (error) {
        throw new Error("Failed to send email. Please try again.");
    }
}
