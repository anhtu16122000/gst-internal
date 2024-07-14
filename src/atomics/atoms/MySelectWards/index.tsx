import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { useFetchWards } from "@/hooks/region";

export type TMySelectWardsProps = {
  districtCode: string;
} & TMySelectProps;

const MySelectWards: React.FC<TMySelectWardsProps> = ({
  districtCode,
  ...rest
}) => {
  const { data, isLoading } = useFetchWards({ districtCode });
  return (
    <MySelect
      loading={isLoading}
      showSearch
      placeholder={
        districtCode ? "Chọn phường/xã" : "Vui lòng chọn quận/huyện trước"
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

export default MySelectWards;
