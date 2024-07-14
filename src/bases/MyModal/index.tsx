import { IconClear } from "@/icons";
import { Modal, ModalProps } from "antd";
import React from "react";
import styles from "./styles.module.scss";

export type TMyModalProps = {
  scrollable?: boolean;
  okLoading?: boolean;
  okDisabled?: boolean;
} & Omit<ModalProps, "closeIcon">;

const MyModal: React.FC<TMyModalProps> = (props) => {
  const {
    children,
    scrollable = true,
    centered = true,
    okLoading = false,
    okDisabled = false,
    className = "",
    title,
    ...rest
  } = props;

  return (
    <Modal
      zIndex={300}
      okButtonProps={{
        size: "large",
        loading: okLoading,
        disabled: okDisabled,
      }}
      cancelButtonProps={{
        size: "large",
      }}
      title={title}
      className={
        scrollable ? `${styles.scrollable} ${className} ${styles.wrapper}` : ""
      }
      centered={centered}
      {...rest}
      closeIcon={<IconClear />}
    >
      {children}
    </Modal>
  );
};

export default MyModal;
