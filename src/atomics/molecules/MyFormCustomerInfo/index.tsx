import MySelectGender from "@/atomics/atoms/MySelectGender";
import MyUploadImageSingle from "@/atomics/atoms/MyUploadImageSingle";
import MyForm, { TMyFormProps } from "@/bases/MyForm";
import MyFormItem from "@/bases/MyFormItem";
import MyInput from "@/bases/MyInput";
import MyInputPassword from "@/bases/MyInputPassword";
import MyTextArea from "@/bases/MyTextArea";
import { RULE_REQUIRED } from "@/constants/common";

export type TMyFormCustomerInfoProps = {} & TMyFormProps;

const MyFormCustomerInfo: React.FC<TMyFormCustomerInfoProps> = (props) => {
  return (
    <MyForm {...props}>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
        <MyFormItem className="col-span-2" name="avatar" label="Ảnh đại diện">
          <MyUploadImageSingle />
        </MyFormItem>
        <div className="flex gap-3">
          <MyFormItem name="firstName" rules={[RULE_REQUIRED]} label="Họ">
            <MyInput />
          </MyFormItem>
          <MyFormItem name="lastName" rules={[RULE_REQUIRED]} label="Tên">
            <MyInput />
          </MyFormItem>
        </div>
        <MyFormItem name="gender" rules={[RULE_REQUIRED]} label="Giới tính">
          <MySelectGender />
        </MyFormItem>
        <MyFormItem name="password" label="Mật khẩu">
          <MyInputPassword />
        </MyFormItem>
        <MyFormItem className="col-span-2" name="note" label="Giới thiệu">
          <MyTextArea />
        </MyFormItem>
      </div>
    </MyForm>
  );
};

export default MyFormCustomerInfo;
