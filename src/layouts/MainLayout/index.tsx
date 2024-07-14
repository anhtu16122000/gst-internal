import MyImage from "@/bases/MyImage";
import MyLink from "@/bases/MyLink";
import { FaUserCircle } from "react-icons/fa";

import { Menu, MenuProps } from "antd";
import { MdClass } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import UserInfoSection from "./UserInfoSection";
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/staffs",
    label: <MyLink href="/staffs" DisplayComponent={<p>Nhân sự</p>} />,
    icon: <FaUserCircle size={20} />,
  },
  {
    key: "/tutors",
    label: <MyLink href="/tutors" DisplayComponent={<p>Gia sư</p>} />,
    icon: <PiChalkboardTeacherFill size={20} />,
  },
  {
    key: "/customers",
    label: <MyLink href="/customers" DisplayComponent={<p>Phụ huynh</p>} />,
    icon: <RiParentFill size={20} />,
  },
  {
    key: "/classes",
    label: <MyLink href="/classes" DisplayComponent={<p>Lớp học</p>} />,
    icon: <MdClass size={20} />,
  },
];

const MainLayout = ({ children }) => {
  return (
    <div>
      <nav className="flex fixed z-50 top-0 right-0 left-0 items-center bg-white">
        <div className="w-[256px] py-2 flex items-center justify-center">
          <MyLink
            href="/"
            DisplayComponent={
              <div className="flex gap-2">
                <MyImage
                  src="/logo.png"
                  alt="Logo website gia sư trẻ"
                  width={45}
                  height={45}
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap ">
                  Gia sư trẻ
                </span>
              </div>
            }
          />
        </div>
        <div className="flex flex-1">
          <div className="ml-auto mr-5">
            <UserInfoSection />
          </div>
        </div>
      </nav>
      <div className="flex  mt-[61px] ">
        <div className="h-[calc(100vh-61px)] sticky top-[60px] flex">
          <Menu style={{ width: 256 }} mode="inline" items={items} />
        </div>
        <div className="flex w-full px-3 justify-center">
          <main className="container">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
