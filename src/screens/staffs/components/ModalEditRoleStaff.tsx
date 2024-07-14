import MyButtonActionType from "@/atomics/atoms/MyButtonActionType";
import MyFormStaff from "@/atomics/molecules/MyFormStaff";
import MyModal from "@/bases/MyModal";
import staffsService from "@/services/staffs";
import { EditStaffSecretDto } from "@/services/staffs/staffs-service.type";
import AccountEntity from "@/types/entities/account.type";
import { myToast } from "@/utils/toastHandler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form } from "antd";
import { useEffect, useState } from "react";

const ModalEditRoleStaff = (props: { account: AccountEntity }) => {
  const { account } = props;

  const [open, setOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const createStaff = useMutation({
    mutationFn: (dataForm: EditStaffSecretDto & { id: string }) =>
      staffsService.editSecret(dataForm.id, dataForm),
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
      role: account?.staff?.role,
    });
  }, [account, form, open]);

  return (
    <>
      <MyButtonActionType
        onClick={() => {
          setOpen(true);
        }}
        type={"permission"}
      />
      <MyModal
        open={open}
        onCancel={() => setOpen(false)}
        title="Chỉnh sửa quyền"
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
            showPasswordNameField: false,
            showEmailField: false,
            showNameField: false,
            showGenderField: false,
          }}
        />
      </MyModal>
    </>
  );
};

export default ModalEditRoleStaff;
