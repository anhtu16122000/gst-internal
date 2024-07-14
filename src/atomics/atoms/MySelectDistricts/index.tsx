import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { useFetchDistricts } from "@/hooks/region";

export type TMySelectDistrictsProps = {
  provinceCode: string;
} & TMySelectProps;

const MySelectDistricts: React.FC<TMySelectDistrictsProps> = ({
  provinceCode,
  ...rest
}) => {
  const { data, isLoading } = useFetchDistricts({ provinceCode });
  return (
    <MySelect
      loading={isLoading}
      showSearch
      placeholder={
        provinceCode ? "Chọn quận/huyện" : "Vui lòng chọn tỉnh/thành phố trước"
      }
      optionFilterProp="label"
      options={data.map((province) => ({
        label: province.fullName,
        value: province.code,
      }))}
      {...rest}
    />
  );
};

export default MySelectDistricts;
