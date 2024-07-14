import { Divider, DividerProps } from "antd";

export type MyDividerProps = {} & DividerProps;

const MyDivider: React.FC<MyDividerProps> = ({ children, ...rest }) => {
  return (
    <Divider style={{ margin: 0 }} {...rest}>
      {children}
    </Divider>
  );
};

export default MyDivider;
