import { FaCheckDouble } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import MyButtonHTMLPopover, {
  TMyButtonHTMLPopoverProps,
} from "../MyButtonHTMLPopover";

type TType = "edit" | "permission" | "delete";

const TYPES: Record<
  TType,
  {
    Icon: TMyButtonHTMLPopoverProps["Icon"];
    children: TMyButtonHTMLPopoverProps["children"];
  }
> = {
  edit: {
    Icon: <FiEdit size={16} className="text-amber-500" />,
    children: <span>Chỉnh sửa</span>,
  },
  permission: {
    Icon: <FaCheckDouble size={13} className="text-pink-500" />,
    children: <span>Cấp quyền</span>,
  },
  delete: {
    Icon: <RiDeleteBinLine size={16} className="text-red-500" />,
    children: <span>Xoá</span>,
  },
};

export type TMyButtonHTMLPopoverTypeProps = {
  type: TType;
  typeButton?: TMyButtonHTMLPopoverProps["type"];
} & Omit<TMyButtonHTMLPopoverProps, "Icon" | "children" | "type">;

const MyButtonHTMLPopoverType: React.FC<TMyButtonHTMLPopoverTypeProps> = (
  props,
) => {
  const { type = "edit", typeButton = "button", ...rest } = props;

  return <MyButtonHTMLPopover type={typeButton} {...TYPES[type]} {...rest} />;
};

export default MyButtonHTMLPopoverType;
