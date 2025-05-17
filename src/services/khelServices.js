const { KhelRequest } = require("@/constants/apiURL");
const { default: api } = require("@/lib/axios");

const fetchKhel = async () => {
  const result = await api.get(KhelRequest);
  return result.data;
};

module.exports = {
  fetchKhel,
};
