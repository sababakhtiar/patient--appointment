"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOTP = generateOTP;
exports.sendOTPToMobile = sendOTPToMobile;
const twilio_1 = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const twilioClient = new twilio_1.Twilio(accountSid, authToken);
function generateOTP() {
    return Math.floor(10000 + Math.random() * 90000).toString();
}
async function sendOTPToMobile(mobileNo, otp) {
    try {
        await twilioClient.messages.create({
            body: `Your OTP code is ${otp}`,
            from: twilioPhoneNumber,
            to: mobileNo,
        });
    }
    catch (error) {
        throw new Error("Failed to send OTP. Please try again.");
    }
}
// "start": "node --max-old-space-size=1024  dist/src/index.js",
// "build": "tsc"
