import MyInputNumberFormatter from "@/atomics/atoms/MyInputNumberFormatter";
import MySelectRequiredGender from "@/atomics/atoms/MySelectRequiredGender";
import MySelectSessionPerWeek from "@/atomics/atoms/MySelectSessionPerWeek";
import MySelectSubjects from "@/atomics/atoms/MySelectSubjects";
import MySelectTeachingClassType from "@/atomics/atoms/MySelectTeachingClassType";
import MySelectTeachingMethod from "@/atomics/atoms/MySelectTeachingMethod";
import MyDivider from "@/bases/MyDivider";
import MyForm, { TMyFormProps } from "@/bases/MyForm";
import MyFormItem from "@/bases/MyFormItem";
import MyTextArea from "@/bases/MyTextArea";
import { RULE_REQUIRED } from "@/constants/common";
import numberHandler from "@/utils/numberHandler";
import { Form } from "antd";

type TMyFormClassProps = {
  form: TMyFormProps["form"];
} & TMyFormProps;

const MyFormClass: React.FC<TMyFormClassProps> = (props) => {
  const { className, form, ...rest } = props;
  const sessionPerWeek = Form.useWatch("sessionPerWeek", form);
  const salaryPerHour = Form.useWatch("salary", form);

  const numberSessionPerMonth = sessionPerWeek * 4;

  return (
    <MyForm
      form={form}
      className={`grid grid-cols-2 gap-x-3 ${className}`}
      {...rest}
    >
      <MyDivider className="col-span-2">Thông tin lớp</MyDivider>
      <MyFormItem label="Môn dạy" name="subjectCodes" rules={[RULE_REQUIRED]}>
        <MySelectSubjects allowClear />
      </MyFormItem>
      <MyFormItem
        name="teachingClassTypeCode"
        rules={[RULE_REQUIRED]}
        label="Bé học lớp"
      >
        <MySelectTeachingClassType mode={undefined} />
      </MyFormItem>
      <MyFormItem
        name="salary"
        extra={"Mức trung bình là 100.000 VNĐ/giờ"}
        rules={[RULE_REQUIRED]}
        label="Mức lương/giờ"
      >
        <MyInputNumberFormatter />
      </MyFormItem>
      <MyFormItem
        name="sessionPerWeek"
        rules={[RULE_REQUIRED]}
        label="Số buổi dạy trong tuần"
      >
        <MySelectSessionPerWeek />
      </MyFormItem>
      <MyFormItem label="Tạm tính lương mỗi tháng" className="col-span-2">
        <div className="text-base text-gray-700 p-3 rounded-md bg-white">
          {!(sessionPerWeek && salaryPerHour) && (
            <p className="text-orange-500">
              * Vui lòng nhập lương trên giờ và số buổi dạy một tuần
            </p>
          )}
          {sessionPerWeek && salaryPerHour && (
            <>
              <p>
                - Tổng số buổi dự tính:{" "}
                {numberHandler.formatNumber(numberSessionPerMonth)} buổi
              </p>
              <p>
                - Tổng lương mỗi tháng (1 giờ 30 phút/buổi):{" "}
                {numberHandler.formatNumber(
                  salaryPerHour * 1.5 * numberSessionPerMonth,
                )}{" "}
                VNĐ
              </p>
              <p>
                - Tổng lương mỗi tháng (2 giờ/buổi):{" "}
                {numberHandler.formatNumber(
                  salaryPerHour * 2 * numberSessionPerMonth,
                )}{" "}
                VNĐ
              </p>
            </>
          )}
        </div>
      </MyFormItem>
      <MyFormItem
        name="requiredGender"
        rules={[RULE_REQUIRED]}
        label="Yêu cầu (giới tính)"
      >
        <MySelectRequiredGender />
      </MyFormItem>
      <MyFormItem
        name="teachingMethod"
        rules={[RULE_REQUIRED]}
        label="Hình thức dạy"
      >
        <MySelectTeachingMethod />
      </MyFormItem>
      <MyFormItem
        name="describeNote"
        className="col-span-2 "
        rules={[RULE_REQUIRED]}
        label="Mô tả chi tiết công việc"
      >
        <MyTextArea />
      </MyFormItem>
    </MyForm>
  );
};

export default MyFormClass;
