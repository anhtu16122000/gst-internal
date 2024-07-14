import { PAGE_SIZE } from "@/constants/common";
import { GENDER } from "@/types/enum";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
} from "nuqs";

export const searchOptions = {
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(PAGE_SIZE),
  gender: parseAsArrayOf(
    parseAsStringEnum<GENDER>(Object.values(GENDER)),
    ",",
  ).withDefault([]),

  code: parseAsString.withDefault(""),
  phoneNumber: parseAsString.withDefault(""),
};
