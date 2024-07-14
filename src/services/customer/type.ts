import { MyPaginationDTO } from "@/types/common.type";
import { GENDER } from "@/types/enum";

type TGetAll = MyPaginationDTO<{
  gender?: GENDER[];
  code?: string;
  phoneNumber?: string;
}>;

type TEdit = {
  password?: string;
  email?: string;
  gender?: GENDER;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  note?: string;
};

type TCustomersServiceType = {
  TGetAll: TGetAll;
  TEdit: TEdit;
};

export default TCustomersServiceType;
