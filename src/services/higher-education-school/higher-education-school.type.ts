import { TField } from "@/types/common.type";

export type THigherEducationSchoolCreate = {
  name: string;
  shortHandName?: string;
  image?: string;
};
export type THigherEducationSchoolCreateMultiple = {
  schools: THigherEducationSchoolCreate[];
};
