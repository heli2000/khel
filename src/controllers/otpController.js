const { v4: uuidv4 } = require("uuid");
const db = require("../models"); // Adjust path as needed
const { OTPGenerated, OTPVerified } = require("@/constants/successMessage");
const {
  SuccessCreationCode,
  ExceptionCode,
  SuccessCode,
  ValidationCode,
} = require("@/constants/apiStatus");
const { NextResponse } = require("next/server");
const {
  UserIdRequired,
  OTPRequired,
  InValidOTP,
  OTPExpired,
} = require("@/constants/validationMessage");
const Otp = require("@/models/otpModel");

// Helper to generate a 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// POST /otp/:userId
exports.generateOtp = async (user) => {
  const otpCode = generateOTP();
  const otpId = uuidv4();

  try {
    await Otp.create({
      id: otpId,
      phoneNumber: user.phoneNumber,
      otp: otpCode,
      createdDateTime: new Date(),
    });

    return {
      data: {
        success: true,
        status: SuccessCreationCode,
        message: OTPGenerated,
        otpCode,
      },
    };
  } catch (err) {
    return {
      data: {
        success: false,
        status: ExceptionCode,
        message: "Error creating user",
        error: err.message,
      },
    };
  }
};

exports.verifyOtp = async ({ phoneNumber, otp }) => {
  try {
    const otpRecord = await Otp.findOne({ where: { phoneNumber, otp } });

    if (!otpRecord) {
      return {
        data: {
          success: false,
          status: ExceptionCode,
          message: InValidOTP,
        },
      };
    }

    // Optionally, check if OTP is expired (e.g., valid for 10 minutes)
    const now = new Date();
    const created = new Date(otpRecord.createdDateTime);
    const diffMinutes = (now - created) / (1000 * 60);
    if (diffMinutes > 10) {
      return {
        data: {
          success: false,
          status: ValidationCode,
          message: OTPExpired,
        },
      };
    }

    // Optionally, delete OTP after successful verification
    await otpRecord.destroy();

    return {
      data: {
        success: true,
        status: SuccessCode,
        message: OTPVerified,
      },
    };
  } catch (err) {
    return {
      data: {
        success: false,
        status: ExceptionCode,
        message: "Error verifying OTP",
        error: err.message,
      },
    };
  }
};
