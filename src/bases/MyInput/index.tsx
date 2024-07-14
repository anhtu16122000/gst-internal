import { debounce } from "@/utils/performanceHandler";
import { Input, InputProps } from "antd";
import React, { useMemo } from "react";

type TMyInputProps = {
  onChangeDebounce?: InputProps["onChange"];
} & InputProps;

const MyInput: React.FC<TMyInputProps> = (props) => {
  const { onChange, onChangeDebounce, ...rest } = props;
  const debounced = useMemo(() => debounce(), []);
  return (
    <Input
      onChange={(event) => {
        if (typeof onChange === "function") {
          onChange(event);
        }
        if (typeof onChangeDebounce === "function") {
          debounced(() => {
            onChangeDebounce(event);
          });
        }
      }}
      {...rest}
    />
  );
};

export default MyInput;
