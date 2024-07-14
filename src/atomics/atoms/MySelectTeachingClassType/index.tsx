"use client";
import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { OBJ_TEACHING_CLASS_TYPE } from "@/constants/common";

type TMySelectTeachingClassTypeProps = {
  mode?: TMySelectProps["mode"] | undefined;
} & Omit<TMySelectProps, "mode">;

const MySelectTeachingClassType: React.FC<TMySelectTeachingClassTypeProps> = (
  props,
) => {
  return (
    <MySelect
      mode="multiple"
      placeholder="Chọn loại lớp"
      options={Object.keys(OBJ_TEACHING_CLASS_TYPE).map((key) => {
        return {
          label: OBJ_TEACHING_CLASS_TYPE[key].label,
          value: OBJ_TEACHING_CLASS_TYPE[key].value,
        };
      })}
      {...props}
    />
  );
};

export default MySelectTeachingClassType;
