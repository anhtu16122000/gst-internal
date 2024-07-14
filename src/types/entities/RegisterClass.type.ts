import { MyEntity } from "../common.type";
import AccountEntity from "./account.type";
import ClassEntity from "./class.type";

type RegisterClassEntity = MyEntity<{
  class: ClassEntity;
  account: AccountEntity;
}>;

export default RegisterClassEntity;
