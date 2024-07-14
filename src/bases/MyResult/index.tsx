import { ResultProps } from "antd";
import { Result } from "antd/lib";

export type TMyResultProps = {} & ResultProps;

const MyResult: React.FC<TMyResultProps> = (props) => {
  return <Result {...props} />;
};

export default MyResult;
