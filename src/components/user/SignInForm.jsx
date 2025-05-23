import { SuccessCreationCode } from "@/constants/apiStatus";
import { PhoneNumberRequired } from "@/constants/validationMessage";
import { generateOTP } from "@/services/userServices";
import { Button } from "antd";
import Form from "antd/es/form/Form";
import Input from "antd/es/input/Input";

const SignInForm = ({ authMode, isOtp }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    let response = await generateOTP(values);
    if (response.status == SuccessCreationCode) {
      isOtp(values.phoneNumber);
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <div style={{ marginBottom: 8, fontWeight: 500 }}>
        {authMode === "signin" ? "Sign In" : "Sign Up"}
      </div>
      <Form.Item
        name="phoneNumber"
        rules={[{ required: true, message: PhoneNumberRequired }]}
      >
        <Input type="tel" placeholder="Enter phone number" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          {authMode === "signin" ? "Sign In" : "Sign Up"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
