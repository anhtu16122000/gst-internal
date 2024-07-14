import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { OBJ_TEACHING_METHOD } from "@/constants/common";
import { objectToArray } from "@/utils/arrayHandler";
import React from "react";

export type TMySelectTeachingMethodProps = {} & TMySelectProps;

const MySelectTeachingMethod: React.FC<TMySelectTeachingMethodProps> = ({
  ...rest
}) => {
  return (
    <MySelect
      placeholder="Chọn hình thức giảng dạy"
      options={objectToArray(OBJ_TEACHING_METHOD).map((method) => {
        return {
          label: method.label,
          value: method.value,
        };
      })}
      {...rest}
    />
  );
};

export default MySelectTeachingMethod;
