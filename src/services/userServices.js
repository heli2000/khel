const { GenerateOTPRequest, VerifyOTPRequest } = require("@/constants/apiURL");
const { default: api } = require("@/lib/axios");

const generateOTP = async (obj) => {
  const result = await api.post(GenerateOTPRequest, obj);
  return result.data;
};

const verifyOTP = async (obj) => {
  const result = await api.post(VerifyOTPRequest, obj);
  return result.data;
};

module.exports = {
  generateOTP,
  verifyOTP,
};
