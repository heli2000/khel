import { SuccessCreationCode } from "@/constants/apiStatus";
import { PhoneNumberRequired } from "@/constants/validationMessage";
import { verifyOTP } from "@/services/userServices";
import { Button } from "antd";
import Form from "antd/es/form/Form";
import Input from "antd/es/input/Input";

const UserOTPVerifyForm = ({ phoneNumber }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    const requestBody = {
      ...values,
      phoneNumber: phoneNumber,
    };
    let response = await verifyOTP(requestBody);
    if (response.status == SuccessCreationCode) {
      setIsOtp(true);
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <div style={{ marginBottom: 8, fontWeight: 500 }}>OTP verification</div>
      <Form.Item
        name="otp"
        rules={[{ required: true, message: PhoneNumberRequired }]}
      >
        <Input type="text" placeholder="Enter OTP" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Verify OTP
        </Button>
        <Button type="text" htmlType="button" block>
          Resend OTP
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserOTPVerifyForm;
