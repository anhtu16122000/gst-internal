import { PAGE_SIZE } from "@/constants/common";
import {
  TeachingClassType,
  REQUIRED_GENDER,
  TEACHING_METHOD,
  SUBJECT,
} from "@/types/enum";
import {
  parseAsInteger,
  parseAsFloat,
  parseAsArrayOf,
  parseAsStringEnum,
  parseAsString,
} from "nuqs";

export const searchOptions = {
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(PAGE_SIZE),
  minSalary: parseAsFloat.withDefault(0),
  maxSalary: parseAsFloat.withDefault(0),
  teachingClassTypeCodes: parseAsArrayOf(
    parseAsStringEnum<TeachingClassType>(Object.values(TeachingClassType)),
    ",",
  ).withDefault([]),
  gender: parseAsArrayOf(
    parseAsStringEnum<REQUIRED_GENDER>(Object.values(REQUIRED_GENDER)),
    ",",
  ).withDefault([]),
  sessionPerWeeks: parseAsArrayOf(parseAsInteger).withDefault([]),
  teachingMethod: parseAsStringEnum(Object.values(TEACHING_METHOD)),
  subjectCodes: parseAsArrayOf(
    parseAsStringEnum<SUBJECT>(Object.values(SUBJECT)),
    ",",
  ).withDefault([]),
  provinceCode: parseAsString.withDefault(""),
  districtCodes: parseAsArrayOf(parseAsString).withDefault([]),
};
