import MyResult from "@/bases/MyResult";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import MyModalAuto, { TMyModalAutoProps } from "../MyModalAuto";

type TType = "delete";

export type TMyModalAutoConfirmProps = {
  type: TType;
  onOk: () => Promise<void>;
} & Omit<TMyModalAutoProps, "onOk">;

const TYPES: Record<
  TType,
  {
    okButtonProps: TMyModalAutoProps["okButtonProps"];
    children: TMyModalAutoProps["children"];
  }
> = {
  delete: {
    okButtonProps: {
      danger: true,
      size: "large",
      ghost: true,
      children: "Xoá",
      icon: <RiDeleteBinLine size={16} className="text-red-500" />,
    },
    children: (
      <MyResult
        status="warning"
        title={
          <p>
            Vui lòng xác nhận <span className="text-red-500">xoá</span> !
          </p>
        }
      />
    ),
  },
};

const MyModalAutoConfirm: React.FC<TMyModalAutoConfirmProps> = (props) => {
  const { type = "delete", onOk, ...rest } = props;
  const { okButtonProps, ...restTypes } = TYPES[type];
  const [loading, setLoading] = useState<boolean>(false);

  const handleOk = async (setOpen) => {
    setLoading(true);
    await onOk();
    setLoading(false);
    setOpen(false);
  };

  return (
    <MyModalAuto
      cancelButtonProps={{
        size: "large",
      }}
      okButtonProps={{
        size: "large",
        ...okButtonProps,
        loading: loading,
      }}
      onOk={({ setOpen }) => handleOk(setOpen)}
      {...restTypes}
      {...rest}
    />
  );
};

export default MyModalAutoConfirm;
