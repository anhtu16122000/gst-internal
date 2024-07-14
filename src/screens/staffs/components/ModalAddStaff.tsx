import MyFormStaff from "@/atomics/molecules/MyFormStaff";
import MyButton from "@/bases/MyButton";
import MyModal from "@/bases/MyModal";
import staffsService from "@/services/staffs";
import { CreateStaffDto } from "@/services/staffs/staffs-service.type";
import { myToast } from "@/utils/toastHandler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form } from "antd";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const ModalAddStaff = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const createStaff = useMutation({
    mutationFn: (dataForm: CreateStaffDto) => staffsService.create(dataForm),
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

  return (
    <>
      <MyButton onClick={() => setOpen(true)} icon={<IoMdAdd size={20} />}>
        Tạo mới
      </MyButton>
      <MyModal
        open={open}
        onCancel={() => setOpen(false)}
        title="Thêm nhân viên mới"
        okLoading={createStaff.isPending}
        onOk={form.submit}
      >
        <MyFormStaff
          id="create-staff"
          form={form}
          onFinish={(dataForm) => createStaff.mutate(dataForm)}
        />
      </MyModal>
    </>
  );
};

export default ModalAddStaff;
