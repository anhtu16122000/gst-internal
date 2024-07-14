import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { OBJECT_TUTOR_PROFILE_STATUS } from "@/constants/common";
import { TUTOR_PROFILE_STATUS } from "@/types/enum";
import { objectToArray } from "@/utils/arrayHandler";
import React from "react";

export type TMySelectTutorStatusProps = {
  omitStatus?: TUTOR_PROFILE_STATUS[];
} & TMySelectProps;

const MySelectTutorStatus: React.FC<TMySelectTutorStatusProps> = (props) => {
  const { omitStatus = [], ...rest } = props;

  return (
    <MySelect
      placeholder="Chọn tình trạng"
      options={objectToArray(OBJECT_TUTOR_PROFILE_STATUS)
        .filter((item) => {
          return !omitStatus.includes(item.value);
        })
        .map((method) => {
          return {
            label: method.label,
            value: method.value,
          };
        })}
      {...rest}
    />
  );
};

export default MySelectTutorStatus;
