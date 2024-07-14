import { TApiResponse } from "@/types/common.type";
import AccountEntity from "@/types/entities/account.type";
import instance from "..";
import TCustomersServiceType from "./type";

const URL = "/customers";
const customersService = {
  // GET/customers/find
  find(params: TCustomersServiceType["TGetAll"]) {
    return instance.post<
      TApiResponse<{ customers: AccountEntity[]; total: number }>
    >(`${URL}/find`, params);
  },
  // PUT/customers/:id
  edit(id: string, data: TCustomersServiceType["TEdit"]) {
    return instance.put<TApiResponse<TApiResponse<AccountEntity>>>(
      `${URL}/${id}`,
      data,
    );
  },
  // DELETE/customers/:id
  delete(accountId: string) {
    return instance.delete<TApiResponse<TApiResponse<{}>>>(
      `${URL}/${accountId}`,
    );
  },
};

export default customersService;
