import { debounce } from "@/utils/performanceHandler";
import { InputNumber, InputNumberProps } from "antd";
import { valueType } from "antd/es/statistic/utils";
import React, { useMemo } from "react";

export type TMyInputNumberProps = {
  onChangeDebounce?: (value: valueType | null) => void;
} & InputNumberProps;

const MyInputNumber: React.FC<TMyInputNumberProps> = (props) => {
  const { onChange, onChangeDebounce, ...rest } = props;
  const debounced = useMemo(() => debounce(), []);

  return (
    <InputNumber
      style={{ width: "100%" }}
      onChange={(value) => {
        if (typeof onChange === "function") {
          onChange(value);
        }
        if (typeof onChangeDebounce === "function") {
          debounced(() => {
            onChangeDebounce(value);
          });
        }
      }}
      {...rest}
    />
  );
};

export default MyInputNumber;
