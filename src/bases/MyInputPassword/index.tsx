import { Input } from "antd";

type TMyInputPasswordProps = {};

const MyInputPassword: React.FC<TMyInputPasswordProps> = (props) => {
  return <Input.Password {...props} />;
};

export default MyInputPassword;
