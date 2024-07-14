import MyButtonActionType from "@/atomics/atoms/MyButtonActionType";
import MyFormClass from "@/atomics/molecules/MyFormClass";
import MyModal from "@/bases/MyModal";
import classesService from "@/services/classes";
import ClassEntity from "@/types/entities/class.type";
import { myToast } from "@/utils/toastHandler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form } from "antd";
import { useEffect, useState } from "react";

const ModalEditClass: React.FC<{ _class: ClassEntity }> = (props) => {
  const { _class } = props;
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const [form] = Form.useForm();

  const edit = useMutation({
    mutationFn: (data: any) => classesService.edit(_class?.id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["GET/classes/find-all"],
      });
      myToast.success(data?.data?.message?.[0]);
      setOpen(false);
    },
    onError: (error: any) => {
      myToast.error(error?.message[0]);
    },
  });

  console.log("_class", _class);
  useEffect(() => {
    if (open) {
      const subjectClassCode =
        _class?.subjectClass?.map((item) => item.subjectCode) || [];
      form.setFieldsValue({
        ..._class,
        subjectCodes: subjectClassCode,
      });
    }
  }, [_class, form, open]);

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
        title="Chỉnh sửa lớp"
      >
        <MyFormClass onFinish={(values) => edit.mutate(values)} form={form} />
      </MyModal>
    </>
  );
};

export default ModalEditClass;
