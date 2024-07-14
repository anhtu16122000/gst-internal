import AdministrativeUnitEntity from "./AdministrativeUnit.type";
import { ProvinceEntity } from "./province.type";

type DistrictEntity = {
  code: string;
  name: string;
  nameEn: string;
  fullName: string;
  fullNameEn: string;
  codeName: string;
  province: ProvinceEntity;
  administrativeUnit: AdministrativeUnitEntity;
};

export default DistrictEntity;
