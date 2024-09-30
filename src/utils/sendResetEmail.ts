


import { sendMail } from "./mailer"; // Import the reusable mailer function

export async function sendResetEmail(email: string, resetToken: string) {
  const subject = "Password Reset Request";
  const html = `
  
    <h3>Password Reset Request</h3>
    <p>Hi,</p>
    <p>You requested a password reset. Please use the following token to reset your password:</p>
    <p><strong>${resetToken}</strong></p>
    <p>This token will expire in 15 minutes.</p>
    <p>If you did not request a password reset, please ignore this email.</p>
  `;

  return await sendMail(email, subject, html);
}
