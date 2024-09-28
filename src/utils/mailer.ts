import nodemailer from "nodemailer";

// Create transporter once and reuse it
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Reusable mail-sending function
export async function sendMail(to: string, subject: string, html: string) {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    return info.response;
  } catch (error) {
    throw new Error("Failed to send email. Please try again.");
  }
}
