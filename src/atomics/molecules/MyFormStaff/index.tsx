import MySelectGender from "@/atomics/atoms/MySelectGender";
import MySelectRole from "@/atomics/atoms/MySelectRole";
import MyForm, { TMyFormProps } from "@/bases/MyForm";
import MyFormItem, { TMyFormItemProps } from "@/bases/MyFormItem";
import MyInput from "@/bases/MyInput";
import MyInputPassword from "@/bases/MyInputPassword";
import { RULE_REQUIRED } from "@/constants/common";

type TMyFormStaffProps = {
  passwordFormItem?: TMyFormItemProps;
  options?: {
    showEmailField?: boolean;
    showNameField?: boolean;
    showPasswordNameField?: boolean;
    showGenderField?: boolean;
    showRoleField?: boolean;
  };
} & TMyFormProps;

const MyFormStaff: React.FC<TMyFormStaffProps> = (props) => {
  const { passwordFormItem = {}, options, ...rest } = props;
  const {
    showEmailField = true,
    showNameField = true,
    showGenderField = true,
    showRoleField = true,
    showPasswordNameField = true,
  } = options || {};
  return (
    <MyForm {...rest}>
      {showEmailField && (
        <MyFormItem rules={[RULE_REQUIRED]} label="Email" name="email">
          <MyInput />
        </MyFormItem>
      )}
      {showPasswordNameField && (
        <MyFormItem
          rules={[RULE_REQUIRED]}
          label="Mật khẩu"
          name="password"
          {...passwordFormItem}
        >
          <MyInputPassword />
        </MyFormItem>
      )}
      {showNameField && (
        <div className="flex w-full gap-2">
          <MyFormItem rules={[RULE_REQUIRED]} label="Họ" name="firstName">
            <MyInput />
          </MyFormItem>
          <MyFormItem
            rules={[RULE_REQUIRED]}
            className="flex-1"
            label="Tên"
            name="lastName"
          >
            <MyInput />
          </MyFormItem>
        </div>
      )}
      {showGenderField && (
        <MyFormItem rules={[RULE_REQUIRED]} label="Giới tính" name="gender">
          <MySelectGender />
        </MyFormItem>
      )}
      {showRoleField && (
        <MyFormItem rules={[RULE_REQUIRED]} label="Quyền" name="role">
          <MySelectRole />
        </MyFormItem>
      )}
    </MyForm>
  );
};

export default MyFormStaff;
