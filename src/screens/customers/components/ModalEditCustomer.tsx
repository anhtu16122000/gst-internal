import MyButtonActionType from "@/atomics/atoms/MyButtonActionType";
import MyFormCustomerInfo from "@/atomics/molecules/MyFormCustomerInfo";
import MyModal from "@/bases/MyModal";
import customersService from "@/services/customer";
import AccountEntity from "@/types/entities/account.type";
import { myToast } from "@/utils/toastHandler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form } from "antd";
import { useEffect, useState } from "react";

const ModalEditCustomer: React.FC<{ account: AccountEntity }> = (props) => {
  const { account } = props;
  const { customer } = account;
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const [form] = Form.useForm();

  const editCustomer = useMutation({
    mutationFn: (data: any) => customersService.edit(account?.id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["GET/customers/find"],
      });
      myToast.success(data?.data?.message?.[0]);
      setOpen(false);
    },
    onError: (error: any) => {
      myToast.error(error?.message[0]);
    },
  });

  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        ...account,
        ...customer,
      });
    }
  }, [account, form, open, customer]);

  return (
    <>
      <MyButtonActionType onClick={() => setOpen(true)} type="edit" />
      <MyModal
        width={900}
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        onOk={form.submit}
        title="Chỉnh sửa thông tin phụ huynh"
      >
        <MyFormCustomerInfo
          onFinish={(values) => editCustomer.mutate(values)}
          form={form}
        />
      </MyModal>
    </>
  );
};

export default ModalEditCustomer;
