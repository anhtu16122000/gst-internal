import MyButton from "@/bases/MyButton";
import MyModal from "@/bases/MyModal";
import { OBJ_GENDER, OBJ_TUTOR_STUDENT_YEAR } from "@/constants/common";
import RegisterClassEntity from "@/types/entities/RegisterClass.type";
import numberHandler from "@/utils/numberHandler";
import moment from "moment";
import { useState } from "react";

const ModalTutorRegister = ({
  registerClasses,
}: {
  registerClasses: RegisterClassEntity[];
}) => {
  const [open, setOpen] = useState(false);
  const accounts = registerClasses.map((item) => item.account);
  return (
    <>
      <MyButton
        onClick={() => setOpen(true)}
        disabled={(registerClasses?.length || 0) === 0}
        ghost
      >
        ({registerClasses?.length || 0}) gia sư đăng ký
      </MyButton>
      <MyModal
        title="Danh sách gia sư đăng ký dạy lớp"
        open={open}
        onCancel={() => setOpen(false)}
      >
        <div className="flex flex-col gap-2">
          {accounts.map((item) => {
            const { tutor } = item;
            const {
              phoneNumber,
              province,
              DOB,
              address,
              district,
              expectedSalary,
              studentYear,
              ward,
              weeklySession,
            } = tutor;
            const fullAddress = `${address}, ${ward.fullName}, ${district.fullName}, ${province.fullName}`;

            return (
              <div
                className="border p-3 rounded-md hover:bg-slate-50"
                key={item.id}
              >
                <p>Tên: {`${item.firstName} ${item.lastName}`}</p>
                <p>Giới tính: {OBJ_GENDER[item.gender].label}</p>
                <p>Địa chỉ: {fullAddress}</p>
                <p>Ngày sinh: {moment(DOB).format("DD/MM/YYYY")}</p>
                <p>Số điện thoại: {phoneNumber}</p>
                <p>
                  Sinh viên năm: {OBJ_TUTOR_STUDENT_YEAR[studentYear].label}
                </p>
                <p>
                  Lương mong muốn: {numberHandler.formatNumber(expectedSalary)}
                </p>
              </div>
            );
          })}
        </div>
      </MyModal>
    </>
  );
};

export default ModalTutorRegister;
