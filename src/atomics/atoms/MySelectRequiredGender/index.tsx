import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { OBJ_REQUIRED_GENDER } from "@/constants/common";
import { objectToArray } from "@/utils/arrayHandler";
import React from "react";

export type TMySelectRequiredGenderProps = {} & TMySelectProps;

const MySelectRequiredGender: React.FC<TMySelectRequiredGenderProps> = ({
  ...rest
}) => {
  return (
    <MySelect
      placeholder="Giới tính yêu cầu của gia sư"
      options={objectToArray(OBJ_REQUIRED_GENDER).map((gender) => {
        return {
          label: gender.label,
          value: gender.value,
        };
      })}
      {...rest}
    />
  );
};

export default MySelectRequiredGender;
