import { TApiResponse } from "@/types/common.type";
import HigherEducationSchoolEntity from "@/types/entities/HigherEducationSchool.type";
import instance from "..";
import {
  THigherEducationSchoolCreate,
  THigherEducationSchoolCreateMultiple,
} from "./higher-education-school.type";

const URL: string = `/higher-education-school`;

const higherEducationSchoolService = {
  // POST /higher-education-school
  create(data: THigherEducationSchoolCreate) {
    return instance.post<TApiResponse<any>>(`${URL}`, data);
  },
  // POST /higher-education-school/multiple
  createMultiple(data: THigherEducationSchoolCreateMultiple) {
    return instance.post<TApiResponse<any>>(`${URL}/multiple`, data);
  },
  // GET /higher-education-school
  find() {
    return instance.get<
      TApiResponse<{
        data: HigherEducationSchoolEntity[];
        total: number;
      }>
    >(`${URL}`);
  },
  // PUT /higher-education-school/{id}
  update(id: string, data: THigherEducationSchoolCreate) {
    return instance.put<TApiResponse<any>>(`${URL}/${id}`, data);
  },
  // DELETE /higher-education-school/{id}
  delete(id: string) {
    return instance.delete<TApiResponse<any>>(`${URL}/${id}`);
  },
};

export default higherEducationSchoolService;
