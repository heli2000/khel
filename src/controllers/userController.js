// controllers/userController.js
const { SuccessCreationCode, ExceptionCode } = require("@/constants/apiStatus");
const { UserCreated } = require("@/constants/successMessage");
const User = require("@/models/userModel");
const { generateOtp } = require("./otpController");

exports.createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    // Call generate OTP function here
    const otp = await generateOtp(user);

    return {
      data: {
        success: true,
        status: SuccessCreationCode,
        message: UserCreated,
        user,
        otp,
      },
    };
  } catch (error) {
    return {
      data: {
        status: ExceptionCode,
        success: false,
        message: "Error creating user",
        error: error.message,
      },
    };
  }
};
