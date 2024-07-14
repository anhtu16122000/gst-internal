import { TApiResponse } from "@/types/common.type";
import AccountEntity from "@/types/entities/account.type";
import instance from "..";
const URL = "/account";
const accountService = {
  //GET/account/me
  me() {
    return instance.get<TApiResponse<AccountEntity>>(`${URL}/me`);
  },
};

export default accountService;
