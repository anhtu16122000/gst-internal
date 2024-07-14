import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { OBJ_TUTOR_STUDENT_YEAR } from "@/constants/common";
import { objectToArray } from "@/utils/arrayHandler";
import React from "react";

export type TMySelectTutorStudentYearProps = {} & TMySelectProps;

const MySelectTutorStudentYear: React.FC<TMySelectTutorStudentYearProps> = ({
  ...rest
}) => {
  return (
    <MySelect
      options={objectToArray(OBJ_TUTOR_STUDENT_YEAR).map((gender) => {
        return {
          label: gender.label,
          value: gender.value,
        };
      })}
      {...rest}
    />
  );
};

export default MySelectTutorStudentYear;
