import AccountEntity from "@/types/entities/account.type";
import MyAvatar from "../MyAvatar";
type TMyStaffMiniProps = {} & Pick<
  AccountEntity,
  "id" | "lastName" | "firstName" | "staff"
>;

const MyStaffMini: React.FC<TMyStaffMiniProps> = (props) => {
  const { id, lastName, firstName, staff } = props;

  return (
    <div className="flex gap-2 items-center">
      <MyAvatar
        id={id}
        size={"lg"}
        lastName={lastName}
        rounded="rounded-full"
      />
      <div className="flex flex-col gap-1">
        <p className="text-base">
          {firstName} {lastName}
        </p>
        <p className="text-gray-500">{staff.code}</p>
      </div>
    </div>
  );
};

export default MyStaffMini;
