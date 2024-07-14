import { Form, FormProps } from "antd";
export type TMyFormProps = {} & FormProps;
const MyForm: React.FC<TMyFormProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Form scrollToFirstError layout="vertical" size="middle" {...rest}>
      {children as any}
    </Form>
  );
};

export default MyForm;
