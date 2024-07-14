import MyModal, { TMyModalProps } from "@/bases/MyModal";
import React, { Dispatch, SetStateAction, useState } from "react";

export type TMyModalAutoProps = {
  renderDisplayComponent: (params: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  }) => React.ReactElement;
  onOk: (params: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  }) => void;
} & Omit<TMyModalProps, "open" | "onOk">;

const MyModalAuto: React.FC<TMyModalAutoProps> = (props) => {
  const { renderDisplayComponent, onOk, onCancel, ...rest } = props;
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {renderDisplayComponent({ open: open, setOpen: setOpen })}
      <MyModal
        open={open}
        onCancel={(e) => {
          setOpen(false);
          if (typeof onCancel === "function") {
            onCancel(e);
          }
        }}
        onOk={(event) => {
          setOpen(false);
          if (typeof onOk === "function") {
            onOk({ open, setOpen, event });
          }
        }}
        {...rest}
      ></MyModal>
    </>
  );
};

export default MyModalAuto;
