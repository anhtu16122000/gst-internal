import AccountEntity from "@/types/entities/account.type";
import imageHandler from "@/utils/imageHandler";
import MyAvatar from "../MyAvatar";
type TMyTutorMiniProps = {} & Pick<
  AccountEntity,
  "id" | "lastName" | "firstName" | "tutor" | "avatar"
>;

const MyTutorMini: React.FC<TMyTutorMiniProps> = (props) => {
  const { id, lastName, firstName, tutor, avatar } = props;

  return (
    <div className="flex gap-2 items-center">
      <MyAvatar
        id={id}
        size={"lg"}
        src={imageHandler.getUrlImage(avatar)}
        lastName={lastName}
        rounded="rounded-full"
      />
      <div className="flex flex-col gap-1">
        <p className="text-base">
          {firstName} {lastName}
        </p>
        <p className="text-gray-500">{tutor?.code}</p>
      </div>
    </div>
  );
};

export default MyTutorMini;
