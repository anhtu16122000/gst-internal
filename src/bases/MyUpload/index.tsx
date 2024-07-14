import { Upload } from "antd";
import { UploadProps } from "antd/lib";

export type TMyUploadProps = {} & UploadProps;
const MyUpload: React.FC<TMyUploadProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Upload type="drag" {...rest}>
      {children}
    </Upload>
  );
};

export default MyUpload;
