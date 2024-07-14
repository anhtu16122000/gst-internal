import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";

const { confirm } = Modal;

export type TConfirmDelete = {
  title?: string;
  content?: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
};

export const confirmDelete = (params?: TConfirmDelete) => {
  const {
    title = "Vui lòng xác nhận",
    content = "Bạn có muốn xoá nội dung này ?",
    onOk,
  } = params || {};

  confirm({
    centered: true,
    title: title,
    icon: <ExclamationCircleFilled />,
    content: content,
    okText: "Xoá",
    okButtonProps: {
      icon: <DeleteOutlined className="text-rose-500	" />,
    },
    okType: "danger",
    cancelText: "Huỷ",
    onOk,
    onCancel() {},
  });
};
