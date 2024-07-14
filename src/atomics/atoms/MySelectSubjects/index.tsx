import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { OBJ_SUBJECT } from "@/constants/common";
import { objectToArray } from "@/utils/arrayHandler";
import React from "react";

export type TMySelectSubjectsProps = {} & TMySelectProps;

const MySelectSubjects: React.FC<TMySelectSubjectsProps> = ({ ...rest }) => {
  return (
    <MySelect
      placeholder="Chọn môn dạy"
      mode="tags"
      options={objectToArray(OBJ_SUBJECT).map((subject) => {
        return {
          label: subject.label,
          value: subject.value,
        };
      })}
      {...rest}
    />
  );
};

export default MySelectSubjects;
