import AdministrativeRegionEntity from "./AdministrativeRegion.type";
import AdministrativeUnitEntity from "./AdministrativeUnit.type";
import DistrictEntity from "./district.type";

export type ProvinceEntity = {
  code: string;
  name: string;
  nameEn: string;
  fullName: string;
  fullNameEn: string;
  codeName: string;
  administrativeRegion: AdministrativeRegionEntity;
  administrativeUnit: AdministrativeUnitEntity;
  deletedAt: string;
  districts: DistrictEntity[];
};
