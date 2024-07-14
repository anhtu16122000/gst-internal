import { Dropdown } from "antd";
import { DropdownProps } from "antd/lib";
type TMyDropdownProps = {} & DropdownProps;

const MyDropdown: React.FC<TMyDropdownProps> = (props) => {
  return <Dropdown {...props} />;
};

export default MyDropdown;
