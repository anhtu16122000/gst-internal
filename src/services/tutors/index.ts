import { TApiResponse } from "@/types/common.type";
import { TutorEntity } from "@/types/entities/tutor.type";
import instance from "..";
import { ChangeStatusDto, TFindTutorsDto } from "./tutors-service.type";

const URL = "/tutors";
const tutorsService = {
  // GET/tutors/find
  find(tFindTutorsDto: TFindTutorsDto) {
    return instance.post<
      TApiResponse<{ tutors: TutorEntity[]; total: number }>
    >(`${URL}/find`, tFindTutorsDto);
  },
  // DELETE/tutors/:id
  delete(accountId) {
    return instance.delete<TApiResponse<TApiResponse<{}>>>(
      `${URL}/${accountId}`,
    );
  },
  // PUT/tutors/:id/change-status
  changeStatus(accountId: string, data: ChangeStatusDto) {
    return instance.put<TApiResponse<TApiResponse<TutorEntity>>>(
      `${URL}/${accountId}/change-status`,
      data,
    );
  },
};

export default tutorsService;
