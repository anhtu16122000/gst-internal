import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { OBJ_GENDER } from "@/constants/common";
import { objectToArray } from "@/utils/arrayHandler";
import React from "react";

export type TMySelectGenderProps = {} & TMySelectProps;

const MySelectGender: React.FC<TMySelectGenderProps> = ({ ...rest }) => {
  return (
    <MySelect
      placeholder="Chọn giới tính"
      options={objectToArray(OBJ_GENDER).map((gender) => {
        return {
          label: gender.label,
          value: gender.value,
        };
      })}
      {...rest}
    />
  );
};

export default MySelectGender;
