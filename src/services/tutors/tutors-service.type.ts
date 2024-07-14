import { MyPaginationDTO } from "@/types/common.type";
import {
  GENDER,
  SUBJECT,
  TEACHING_METHOD,
  TUTOR_PROFILE_STATUS,
  TeachingClassType,
} from "@/types/enum";

export type TFindTutorsDto = MyPaginationDTO<{
  minSalary?: number;
  maxSalary?: number;
  teachingClassTypeCodes?: TeachingClassType[];
  gender?: GENDER[];
  schoolId?: string[];
  teachingMethod?: TEACHING_METHOD;
  subjectCodes?: SUBJECT[];
}>;

export type ChangeStatusDto = {
  profileStatus: TUTOR_PROFILE_STATUS;
  reason?: string;
};
