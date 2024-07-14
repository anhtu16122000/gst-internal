import { PAGE_SIZE } from "@/constants/common";
import {
  GENDER,
  SUBJECT,
  TEACHING_METHOD,
  TUTOR_PROFILE_STATUS,
  TeachingClassType,
} from "@/types/enum";
import {
  parseAsArrayOf,
  parseAsFloat,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
} from "nuqs";

export const searchOptions = {
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(PAGE_SIZE),
  teachingClassTypeCodes: parseAsArrayOf(
    parseAsStringEnum<TeachingClassType>(Object.values(TeachingClassType)),
    ",",
  ).withDefault([]),
  schoolId: parseAsArrayOf(parseAsString, ",").withDefault([]),
  gender: parseAsArrayOf(
    parseAsStringEnum<GENDER>(Object.values(GENDER)),
    ",",
  ).withDefault([]),
  profileStatus: parseAsArrayOf(
    parseAsStringEnum<TUTOR_PROFILE_STATUS>(
      Object.values(TUTOR_PROFILE_STATUS),
    ),
    ",",
  ).withDefault([]),
  subjectCodes: parseAsArrayOf(
    parseAsStringEnum<SUBJECT>(Object.values(SUBJECT)),
    ",",
  ).withDefault([]),
  teachingMethod: parseAsStringEnum<TEACHING_METHOD>(
    Object.values(TEACHING_METHOD),
  ),
  minSalary: parseAsFloat.withDefault(0),
  maxSalary: parseAsFloat.withDefault(0),
};
