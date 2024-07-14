import { Card } from "antd";
import { CardProps } from "antd/lib";
import React from "react";
import styles from "./styles.module.scss";

export type TMyCardProps = {} & CardProps;

const MyCard: React.FC<TMyCardProps> = (props) => {
  return <Card rootClassName={styles.root} {...props} />;
};

export default MyCard;
