import { MyPaginationDTO, TApiResponse } from "@/types/common.type";
import AccountEntity from "@/types/entities/account.type";
import StaffEntity from "@/types/entities/staff.type";
import instance from "..";
import {
  CreateStaffDto,
  EditStaffDto,
  EditStaffSecretDto,
} from "./staffs-service.type";
const URL = "/staffs";
const staffsService = {
  //GET/staffs/find
  get(params: MyPaginationDTO<{}>) {
    return instance.post<
      TApiResponse<{ staffs: AccountEntity[]; total: number }>
    >(`${URL}/find`, params);
  },
  //POST/staffs
  create(data: CreateStaffDto) {
    return instance.post<TApiResponse<TApiResponse<StaffEntity>>>(
      `${URL}`,
      data,
    );
  },
  // POST/staffs/login
  login(data: { username: string; password: string }) {
    return instance.post<
      TApiResponse<{
        account: AccountEntity;
        accessToken: string;
      }>
    >(`${URL}/login`, data);
  },
  // PUT/staffs/:id
  edit(id: string, data: EditStaffDto) {
    return instance.put<TApiResponse<TApiResponse<AccountEntity>>>(
      `${URL}/${id}`,
      data,
    );
  },
  // PUT/staffs/:id/secret
  editSecret(id: string, data: EditStaffSecretDto) {
    return instance.put<TApiResponse<TApiResponse<AccountEntity>>>(
      `${URL}/${id}/secret`,
      data,
    );
  },
  //DELETE/staff/:id
  delete(id: string) {
    return instance.delete<TApiResponse<TApiResponse<{}>>>(`${URL}/${id}`);
  },
};

export default staffsService;
