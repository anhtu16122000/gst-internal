import { MyPaginationDTO } from "@/types/common.type";
import {
  REQUIRED_GENDER,
  SUBJECT,
  TEACHING_METHOD,
  TeachingClassType,
} from "@/types/enum";

type TFindAll = MyPaginationDTO<{
  minSalary: number;
  maxSalary: number;
  teachingClassTypeCodes: TeachingClassType[];
  gender: REQUIRED_GENDER[];
  sessionPerWeeks: number[];
  teachingMethod: TEACHING_METHOD;
  subjectCodes: SUBJECT[];
  provinceCode: string;
  districtCodes: string[];
}>;

type TEdit = {
  salary?: number;
  sessionPerWeek?: number;
  teachingClassTypeCode?: TeachingClassType;
  describeNote?: string;
  subjectCodes?: SUBJECT[];
  requiredGender?: string;
  teachingMethod?: string;
};

type TClassesService = {
  TFindAll: TFindAll;
  TEdit: TEdit;
};

export default TClassesService;
