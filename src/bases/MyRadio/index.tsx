import { Radio } from "antd";
import { RadioProps } from "antd/lib";
import React from "react";

type TMyRadioProps = {} & RadioProps;

const MyRadio: React.FC<TMyRadioProps> = (props) => {
  return <Radio {...props} />;
};

export default MyRadio;
