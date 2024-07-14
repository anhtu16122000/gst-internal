import { TApiResponse } from "@/types/common.type";
import ClassEntity from "@/types/entities/class.type";
import instance from "..";
import TClassesService from "./type";

const URL: string = `/classes`;
const classesService = {
  //GET/classes/find-all
  getAll(params?: TClassesService["TFindAll"]) {
    return instance.post<TApiResponse<{ data: ClassEntity[]; total: number }>>(
      `${URL}/find-all`,
      params,
    );
  },
  //PUT/classes/:id
  edit(id: string, data: TClassesService["TEdit"]) {
    return instance.put<TApiResponse<TApiResponse<ClassEntity>>>(
      `${URL}/${id}`,
      data,
    );
  },
  //DELETE/classes/:id
  delete(id: string) {
    return instance.delete<TApiResponse<TApiResponse<{}>>>(`${URL}/${id}`);
  },
};

export default classesService;
