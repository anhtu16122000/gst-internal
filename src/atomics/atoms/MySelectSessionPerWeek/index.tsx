import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { OBJ_SESSION_PER_WEEK } from "@/constants/common";
import { objectToArray } from "@/utils/arrayHandler";
import React from "react";

export type TMySelectSessionPerWeekProps = {} & TMySelectProps;

const MySelectSessionPerWeek: React.FC<TMySelectSessionPerWeekProps> = ({
  ...rest
}) => {
  return (
    <MySelect
      placeholder="Chọn số buổi một tuần"
      options={objectToArray(OBJ_SESSION_PER_WEEK).map((subject) => {
        return {
          label: subject.label,
          value: subject.value,
        };
      })}
      {...rest}
    />
  );
};

export default MySelectSessionPerWeek;
