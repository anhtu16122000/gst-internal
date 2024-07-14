import MySelectTutorStatus, {
  TMySelectTutorStatusProps,
} from "@/atomics/atoms/MySelectTutorStatus";
import MyForm, { TMyFormProps } from "@/bases/MyForm";
import MyFormItem from "@/bases/MyFormItem";
import MyTextArea from "@/bases/MyTextArea";
import { RULE_REQUIRED } from "@/constants/common";
import { TUTOR_PROFILE_STATUS } from "@/types/enum";
import { useWatch } from "antd/es/form/Form";

type TMyFormTutorChangeStatusProps = {
  form: TMyFormProps["form"];
  mySelectStatusProps?: TMySelectTutorStatusProps;
} & TMyFormProps;

const MyFormTutorChangeStatus: React.FC<TMyFormTutorChangeStatusProps> = (
  props,
) => {
  const { form, mySelectStatusProps = {}, ...rest } = props;
  const profileStatus = useWatch(["profileStatus"], form);
  return (
    <MyForm form={form} {...rest}>
      <MyFormItem
        rules={[RULE_REQUIRED]}
        label="Tình trạng"
        name="profileStatus"
      >
        <MySelectTutorStatus {...mySelectStatusProps} />
      </MyFormItem>
      {profileStatus === TUTOR_PROFILE_STATUS.REJECTED && (
        <MyFormItem label="Lý do" rules={[RULE_REQUIRED]} name="reason">
          <MyTextArea />
        </MyFormItem>
      )}
    </MyForm>
  );
};

export default MyFormTutorChangeStatus;
