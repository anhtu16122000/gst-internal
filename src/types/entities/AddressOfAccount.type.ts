import { MyEntity } from "../common.type";
import AccountEntity from "./account.type";
import DistrictEntity from "./district.type";
import { ProvinceEntity } from "./province.type";
import WardEntity from "./ward.type";

type AddressOfAccountEntity = MyEntity<{
  address: string;
  phoneNumber: string;
  account: AccountEntity;
  province: ProvinceEntity;
  district: DistrictEntity;
  ward: WardEntity;
}>;

export default AddressOfAccountEntity;
