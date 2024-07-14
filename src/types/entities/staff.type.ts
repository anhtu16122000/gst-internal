import { MyEntity } from "../common.type";
import { ROLES } from "../enum";
import AccountEntity from "./account.type";

type StaffEntity = MyEntity<{
  code: string;
  role: ROLES;
  account: AccountEntity;
}>;
export default StaffEntity;
