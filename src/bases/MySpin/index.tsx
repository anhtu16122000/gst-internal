import { Spin, SpinProps } from "antd";

type TMySpinProps = {} & SpinProps;

const MySpin: React.FC<TMySpinProps> = (props) => {
  return <Spin {...props} />;
};

export default MySpin;
