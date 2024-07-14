import MyButtonActionType from "@/atomics/atoms/MyButtonActionType";
import MyFormTutorChangeStatus from "@/atomics/molecules/MyFormTutorChangeStatus";
import MyModal from "@/bases/MyModal";
import tutorsService from "@/services/tutors";
import AccountEntity from "@/types/entities/account.type";
import { myToast } from "@/utils/toastHandler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form } from "antd";
import { useState } from "react";

const ModalChangeStatus: React.FC<{ account: AccountEntity }> = ({
  account,
}) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const [form] = Form.useForm();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (dataForm: any) =>
      tutorsService.changeStatus(account.id, dataForm),
    onError: (error) => {
      myToast.error(error?.message?.[0]);
    },
    onSuccess: (data) => {
      myToast.success(data?.data?.message?.[0]);
      setOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["GET/tutors/find"],
      });
    },
  });

  return (
    <>
      <MyButtonActionType
        type="permission"
        label="Đổi trạng thái"
        onClick={() => setOpen(true)}
      />
      <MyModal
        width={400}
        open={open}
        onOk={form.submit}
        okLoading={isPending}
        onCancel={() => {
          setOpen(false);
        }}
        title="Chỉnh sửa thông tin gia sư"
      >
        <MyFormTutorChangeStatus
          mySelectStatusProps={{
            omitStatus: [account?.tutor?.profileStatus],
          }}
          onFinish={(values) => {
            console.log("values", values);
            mutateAsync(values);
          }}
          form={form}
        />
      </MyModal>
    </>
  );
};

export default ModalChangeStatus;
