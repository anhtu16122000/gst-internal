import MyAvatar from "@/atomics/atoms/MyAvatar";
import MyDivider from "@/bases/MyDivider";
import MyPopover from "@/bases/MyPopover";
import authHandler from "@/utils/authHandler";
import useAuth from "@/zustand/useAuth";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { IoChevronDown } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";

const UserInfoSection = () => {
  const router = useRouter();
  const setAuthData = useAuth((state) => state.setData);
  const account = useAuth((state) => state.data);
  const logout = () => {
    authHandler.handleLogout(router, setAuthData);
  };

  const content = (
    <div className="flex flex-col gap-2">
      <div className="px-3 py-2">
        <p className="text-lg text-blue-600">{`${account.firstName} ${account.lastName}`}</p>
        <p className="text-md text-gray-600">{account.email}</p>
      </div>
      <MyDivider />
      <div className="flex flex-col gap-3">
        <button className="flex cursor-pointer gap-2 px-3 py-2 bg-gray-50 rounded-lg items-center">
          <CgProfile size={22} className="text-blue-600" />{" "}
          <p className="text-lg font-light text-gray-800">Thông tin cá nhân</p>
        </button>
        <button
          onClick={logout}
          className="flex cursor-pointer gap-1 px-3 py-2 bg-gray-50 rounded-lg items-center"
        >
          <RiLogoutBoxRLine size={21} className="text-blue-600" />{" "}
          <p className="ml-1.5 text-lg font-light text-red-600">Đăng xuất</p>
        </button>
      </div>
    </div>
  );

  return (
    <MyPopover title={null} className="group" content={content}>
      <div className="bg-slate-100 px-2.5 py-2.5 rounded-3xl p-ripple flex cursor-pointer gap-2 items-center">
        <MyAvatar
          id={account.id}
          lastName={account.lastName}
          src="/"
          size="sm"
          // src={getUrlImage(account?.avatar)}
          // id={account?.id}
          // lastName={account?.lastName}
        />
        <div>
          <div>{`${account.firstName} ${account.lastName}`}</div>
        </div>
        <IoChevronDown className="group-hover:rotate-[-180deg] transition	 text-blue-600" />
      </div>
    </MyPopover>
  );
};

export default UserInfoSection;
