import { MyEntity } from "../common.type";
import { GENDER } from "../enum";
import AddressOfAccountEntity from "./AddressOfAccount.type";
import CustomerEntity from "./customer.type";
import StaffEntity from "./staff.type";
import { TutorEntity } from "./tutor.type";

type AccountEntity = MyEntity<{
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  registeredBy: string;
  gender: GENDER;
  type: string;
  password: string;
  refreshToken: string;
  tutor: TutorEntity;
  customer: CustomerEntity;
  staff: StaffEntity;
  deletedAt: string;
  addressOfAccount: AddressOfAccountEntity[];
}>;

export default AccountEntity;
