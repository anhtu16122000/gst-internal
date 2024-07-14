import { DatePicker } from "antd";
import { DatePickerProps } from "antd/lib";

type TMyDatePickerProps = {} & DatePickerProps;

const MyDatePicker: React.FC<TMyDatePickerProps> = (props) => {
  const { className = "", ...rest } = props;

  return (
    <DatePicker
      placeholder="Chọn ngày"
      className={`w-full ${className}`}
      format={"DD/MM/YYYY"}
      {...props}
    />
  );
};

export default MyDatePicker;
