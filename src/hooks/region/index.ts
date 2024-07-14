import vietnameseRegionService from "@/services/vietnamese-region";
import { ProvinceEntity } from "@/types/entities/province.type";
import { useQuery } from "@tanstack/react-query";

const useFetchProvince = (): {
  data: ProvinceEntity[];
  isLoading: boolean;
} => {
  const { data, isLoading } = useQuery({
    queryKey: ["GET/vietnamese-region/all-provinces"],
    staleTime: Infinity,
    queryFn: async () => vietnameseRegionService.allProvinces(),
  });

  return {
    isLoading,
    data: data?.data?.data || [],
  };
};

export const useFetchDistricts = ({ provinceCode }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["GET/vietnamese-region/find-district-by-province", provinceCode],
    staleTime: Infinity,
    enabled: Boolean(provinceCode),
    queryFn: async () =>
      vietnameseRegionService.findDistrictByProvince(provinceCode),
  });

  return {
    isLoading,
    data: data?.data?.data || [],
  };
};

export const useFetchWards = ({ districtCode }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["GET/vietnamese-region/find-wards-by-district", districtCode],
    staleTime: Infinity,
    enabled: Boolean(districtCode),
    queryFn: async () =>
      vietnameseRegionService.findWardsByDistrict(districtCode),
  });

  return {
    isLoading,
    data: data?.data?.data || [],
  };
};

export default useFetchProvince;
