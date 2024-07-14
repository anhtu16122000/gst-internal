import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { ROLES } from "@/types/enum";

export type TMySelectRoleProps = {} & TMySelectProps;

const MySelectRole: React.FC<TMySelectRoleProps> = (props) => {
  return (
    <MySelect
      placeholder="Chọn role"
      options={[
        {
          label: ROLES.ADMIN,
          value: ROLES.ADMIN,
        },
        {
          label: ROLES.STAFF,
          value: ROLES.STAFF,
        },
      ]}
      {...props}
    />
  );
};

export default MySelectRole;
