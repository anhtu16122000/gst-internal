import { Tag } from "antd";
import { TagProps } from "antd/lib";
import styles from "./styles.module.scss";

export type TMyTagProps = {
  size?: "sm" | "lg";
} & TagProps;

const tagSize = {
  lg: styles.lg,
};

const MyTag: React.FC<TMyTagProps> = (props) => {
  const { className = "", size = "sm", ...rest } = props;
  return (
    <Tag
      className={`${tagSize?.[size] || ""} ${styles.root} ${className}`}
      {...rest}
    />
  );
};

export default MyTag;
