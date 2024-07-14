import { TApiResponse } from "@/types/common.type";
import DistrictEntity from "@/types/entities/district.type";
import { ProvinceEntity } from "@/types/entities/province.type";
import WardEntity from "@/types/entities/ward.type";
import instance from "..";

const URL: string = `/vietnamese-region`;

const vietnameseRegionService = {
  // GET/vietnamese-region/all-provinces
  allProvinces() {
    return instance.get<TApiResponse<ProvinceEntity[]>>(`${URL}/all-provinces`);
  },
  // GET/vietnamese-region/all-districts
  allDistricts() {
    return instance.get<TApiResponse<DistrictEntity[]>>(`${URL}/all-districts`);
  },
  // GET/vietnamese-region/find-district-by-province
  findDistrictByProvince(provinceCode: string) {
    return instance.get<TApiResponse<DistrictEntity[]>>(
      `${URL}/find-district-by-province`,
      {
        params: {
          provinceCode,
        },
      },
    );
  },
  // GET/vietnamese-region/find-wards-by-district
  findWardsByDistrict(districtCode: string) {
    return instance.get<TApiResponse<WardEntity[]>>(
      `${URL}/find-wards-by-district`,
      {
        params: {
          districtCode,
        },
      },
    );
  },
};

export default vietnameseRegionService;
