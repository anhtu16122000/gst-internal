import { Popconfirm } from "antd";
import { PopconfirmProps } from "antd/lib";

export type TMyPopconfirmProps = {} & PopconfirmProps;

const MyPopconfirm: React.FC<TMyPopconfirmProps> = (props) => {
  return <Popconfirm {...props} />;
};

export default MyPopconfirm;
