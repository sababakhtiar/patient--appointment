import nodemailer from "nodemailer";

export async function sendResetEmail(email: string, resetToken: string) {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Password Reset Request",
      html: `
        <h3>Password Reset Request</h3>
        <p>Hi,</p>
        <p>You requested a password reset. Please use the following token to reset your password:</p>
        <p><strong>${resetToken}</strong></p>
        <p>This token will expire in 15 minutes.</p>
        <p>If you did not request a password reset, please ignore this email.</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return info.response;
  } catch (error) {
    throw new Error("Failed to send reset email. Please try again.");
  }
}
