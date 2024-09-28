"use strict";
// 
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResetEmail = sendResetEmail;
const mailer_1 = require("./mailer"); // Import the reusable mailer function
async function sendResetEmail(email, resetToken) {
    const subject = "Password Reset Request";
    const html = `
    <h3>Password Reset Request</h3>
    <p>Hi,</p>
    <p>You requested a password reset. Please use the following token to reset your password:</p>
    <p><strong>${resetToken}</strong></p>
    <p>This token will expire in 15 minutes.</p>
    <p>If you did not request a password reset, please ignore this email.</p>
  `;
    return await (0, mailer_1.sendMail)(email, subject, html);
}
