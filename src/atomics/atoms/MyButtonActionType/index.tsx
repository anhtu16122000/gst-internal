import { FaCheckDouble } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import MyButtonAction, { TMyButtonActionProps } from "../MyButtonAction";

type TType = "edit" | "permission" | "delete";

const TYPES: Record<
  TType,
  {
    Icon: TMyButtonActionProps["Icon"];
    label: TMyButtonActionProps["label"];
  }
> = {
  edit: {
    Icon: <FiEdit size={16} className="text-amber-500" />,
    label: "Chỉnh sửa",
  },
  permission: {
    Icon: <FaCheckDouble size={13} className="text-pink-500" />,
    label: "Cấp quyền",
  },
  delete: {
    Icon: <RiDeleteBinLine size={16} className="text-red-500" />,
    label: "Xoá",
  },
};
export type TMyButtonActionTypeProps = {
  type: TType;
  label?: string;
} & Omit<TMyButtonActionProps, "Icon" | "label">;

const MyButtonActionType: React.FC<TMyButtonActionTypeProps> = (props) => {
  const { type, label = "", ...rest } = props;

  return (
    <MyButtonAction
      {...TYPES[type]}
      label={label || TYPES[type].label}
      {...rest}
    />
  );
};

export default MyButtonActionType;
