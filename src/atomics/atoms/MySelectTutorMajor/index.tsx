import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { OBJECT_TUTOR_MAJOR } from "@/constants/common";

type TMySelectTutorMajorProps = {} & TMySelectProps;

const MySelectTutorMajor: React.FC<TMySelectTutorMajorProps> = (props) => {
  return (
    <MySelect
      options={Object.keys(OBJECT_TUTOR_MAJOR).map((key) => {
        return {
          label: OBJECT_TUTOR_MAJOR[key].label,
          value: OBJECT_TUTOR_MAJOR[key].value,
        };
      })}
      {...props}
    />
  );
};

export default MySelectTutorMajor;
