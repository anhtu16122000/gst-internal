import Administrative_UnitEntity from "./administrative_unit.type";
import DistrictEntity from "./district.type";

type WardEntity = {
  code: string;
  name: string;
  nameEn: string;
  fullName: string;
  fullNameEn: string;
  codeName: string;
  district: DistrictEntity;
  administrativeUnit: Administrative_UnitEntity;
};

export default WardEntity;
