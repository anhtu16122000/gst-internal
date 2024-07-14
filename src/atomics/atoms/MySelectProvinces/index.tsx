import MySelect, { TMySelectProps } from "@/bases/MySelect";
import useFetchProvince from "@/hooks/region";

export type TMySelectProvincesProps = {} & TMySelectProps;

const MySelectProvinces: React.FC<TMySelectProvincesProps> = ({ ...rest }) => {
  const { data: provinces, isLoading } = useFetchProvince();
  return (
    <MySelect
      showSearch
      optionFilterProp="label"
      placeholder="Chọn tỉnh/thành phố"
      options={provinces.map((province) => ({
        label: province.name,
        value: province.code,
      }))}
      {...rest}
    />
  );
};

export default MySelectProvinces;
