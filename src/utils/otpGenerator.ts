import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const twilioClient = new Twilio(accountSid, authToken);

export function generateOTP(): string {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

export async function sendOTPToMobile(
  mobileNo: string,
  otp: string
): Promise<void> {
  try {
    await twilioClient.messages.create({
      body: `Your OTP code is ${otp}`,
      from: twilioPhoneNumber,
      to: mobileNo,
    });
  } catch (error) {
    throw new Error("Failed to send OTP. Please try again.");
  }
}





    // "start": "node --max-old-space-size=1024  dist/src/index.js",
    // "build": "tsc"