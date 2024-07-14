import MyButtonActionType from "@/atomics/atoms/MyButtonActionType";
import MyFormTutorInfo from "@/atomics/molecules/MyFormTutorInfo";
import MyModal from "@/bases/MyModal";
import AccountEntity from "@/types/entities/account.type";
import { Form } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";

const ModalEditTutor: React.FC<{ account: AccountEntity }> = (props) => {
  const { account } = props;
  const { tutor } = account;
  const [open, setOpen] = useState<boolean>(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        ...account,
        ...tutor,
        DOB: tutor?.DOB ? moment(tutor?.DOB) : undefined,
      });
    }
  }, [account, form, open, tutor]);

  return (
    <>
      <MyButtonActionType onClick={() => setOpen(true)} type="edit" />
      <MyModal
        width={900}
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        title="Chỉnh sửa thông tin gia sư"
      >
        <MyFormTutorInfo form={form} />
      </MyModal>
    </>
  );
};

export default ModalEditTutor;
