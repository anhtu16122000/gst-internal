import MyButtonActionType from "@/atomics/atoms/MyButtonActionType";
import MyFormStaff from "@/atomics/molecules/MyFormStaff";
import MyModal from "@/bases/MyModal";
import staffsService from "@/services/staffs";
import { EditStaffDto } from "@/services/staffs/staffs-service.type";
import AccountEntity from "@/types/entities/account.type";
import { myToast } from "@/utils/toastHandler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form } from "antd";
import { useEffect, useState } from "react";

const ModalEditStaff = (props: { account: AccountEntity }) => {
  const { account } = props;

  const [open, setOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const createStaff = useMutation({
    mutationFn: (dataForm: EditStaffDto & { id: string }) =>
      staffsService.edit(dataForm.id, dataForm),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["GET/staffs/find"],
      });
      myToast.success(data?.data?.message?.[0]);
      setOpen(false);
    },
    onError: (error: any) => {
      myToast.error(error.message);
    },
  });

  useEffect(() => {
    form.setFieldsValue({
      ...account,
    });
  }, [account, form, open]);

  return (
    <>
      <MyButtonActionType
        onClick={() => {
          setOpen(true);
        }}
        type="edit"
      />
      <MyModal
        open={open}
        onCancel={() => setOpen(false)}
        title="Chỉnh sửa thông tin nhân viên"
        okLoading={createStaff.isPending}
        onOk={form.submit}
      >
        <MyFormStaff
          passwordFormItem={{
            rules: [],
          }}
          id="create-staff"
          form={form}
          onFinish={(dataForm) => {
            createStaff.mutate({
              ...dataForm,
              id: account.id,
            });
          }}
          options={{
            showRoleField: false,
          }}
        />
      </MyModal>
    </>
  );
};

export default ModalEditStaff;
