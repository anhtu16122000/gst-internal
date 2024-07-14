import MyInputNumberFormatter from "@/atomics/atoms/MyInputNumberFormatter";
import MySelectDistricts from "@/atomics/atoms/MySelectDistricts";
import MySelectGender from "@/atomics/atoms/MySelectGender";
import MySelectHigherEducationSchool from "@/atomics/atoms/MySelectHigherEducationSchool";
import MySelectProvinces from "@/atomics/atoms/MySelectProvinces";
import MySelectSubjects from "@/atomics/atoms/MySelectSubjects";
import MySelectTeachingClassType from "@/atomics/atoms/MySelectTeachingClassType";
import MySelectTeachingMethod from "@/atomics/atoms/MySelectTeachingMethod";
import MySelectTutorMajor from "@/atomics/atoms/MySelectTutorMajor";
import MySelectTutorStudentYear from "@/atomics/atoms/MySelectTutorStudentYear";
import MySelectWards from "@/atomics/atoms/MySelectWards";
import MyUploadImageSingle from "@/atomics/atoms/MyUploadImageSingle";
import MyDatePicker from "@/bases/MyDatePicker";
import MyDivider from "@/bases/MyDivider";
import MyForm, { TMyFormProps } from "@/bases/MyForm";
import MyFormItem from "@/bases/MyFormItem";
import MyInput from "@/bases/MyInput";
import MyTextArea from "@/bases/MyTextArea";
import { RULE_PHONE_NUMBER, RULE_REQUIRED } from "@/constants/common";
import { useWatch } from "antd/es/form/Form";

type TMyFormTutorInfoProps = {} & TMyFormProps;

const MyFormTutorInfo: React.FC<TMyFormTutorInfoProps> = (props) => {
  const { form, ...rest } = props;

  const provinceCode = useWatch(["provinceCode"], form);
  const districtCode = useWatch(["districtCode"], form);
  return (
    <MyForm form={form} className="grid grid-cols-2 gap-x-3" {...rest}>
      <MyFormItem
        name="avatar"
        className="col-span-2"
        rules={[RULE_REQUIRED]}
        label="Avatar"
        help="Ưu tiên ảnh chân dung, rõ mặt"
      >
        <MyUploadImageSingle />
      </MyFormItem>
      <MyDivider className="col-span-2">Thông tin cơ bản</MyDivider>
      <div className="flex gap-2">
        <MyFormItem name="firstName" rules={[RULE_REQUIRED]} label="Họ">
          <MyInput />
        </MyFormItem>
        <MyFormItem name="lastName" rules={[RULE_REQUIRED]} label="Tên">
          <MyInput />
        </MyFormItem>
      </div>

      <MyFormItem name="DOB" rules={[RULE_REQUIRED]} label="Ngày sinh">
        <MyDatePicker />
      </MyFormItem>
      <MyFormItem name="gender" rules={[RULE_REQUIRED]} label="Giới tính">
        <MySelectGender />
      </MyFormItem>
      <MyFormItem
        name="teachingMethod"
        rules={[RULE_REQUIRED]}
        label="Phương thức giảng dạy"
      >
        <MySelectTeachingMethod />
      </MyFormItem>
      <MyFormItem label="Môn dạy" name="subjectCodes" rules={[RULE_REQUIRED]}>
        <MySelectSubjects />
      </MyFormItem>
      <MyFormItem
        className="col-span-1"
        name="expectedSalary"
        rules={[RULE_REQUIRED]}
        label="Mức lương mong muốn"
      >
        <MyInputNumberFormatter />
      </MyFormItem>
      <MyFormItem
        className="col-span-2"
        name="teachingClassTypeCodes"
        rules={[RULE_REQUIRED]}
        label="Lớp dạy"
      >
        <MySelectTeachingClassType />
      </MyFormItem>
      <MyFormItem
        className="col-span-2"
        name="note"
        rules={[RULE_REQUIRED]}
        label="Thư giới thiệu"
      >
        <MyTextArea />
      </MyFormItem>
      <MyDivider className="col-span-2">Thông tin liên hệ</MyDivider>
      <MyFormItem
        label="Số điện thoại"
        rules={[RULE_REQUIRED, RULE_PHONE_NUMBER]}
        name="phoneNumber"
      >
        <MyInput />
      </MyFormItem>
      <MyFormItem
        label="Tỉnh/Thành phố"
        rules={[RULE_REQUIRED]}
        name="provinceCode"
      >
        <MySelectProvinces
          onChange={() => {
            form?.setFieldsValue({
              districtCode: null,
              wardCode: null,
            });
          }}
        />
      </MyFormItem>
      <MyFormItem
        label="Quận/Huyện"
        rules={[RULE_REQUIRED]}
        name="districtCode"
      >
        <MySelectDistricts
          provinceCode={provinceCode}
          onChange={() => {
            form?.setFieldValue("wardCode", null);
          }}
        />
      </MyFormItem>
      <MyFormItem label="Phường/Xã" rules={[RULE_REQUIRED]} name="wardCode">
        <MySelectWards districtCode={districtCode} />
      </MyFormItem>
      <MyFormItem
        className="col-span-2"
        name="address"
        rules={[RULE_REQUIRED]}
        label="Địa chỉ"
      >
        <MyInput />
      </MyFormItem>
      <MyDivider className="col-span-2">Thông tin học vấn</MyDivider>
      <MyFormItem
        name="studentYear"
        rules={[RULE_REQUIRED]}
        label="Sinh viên năm"
      >
        <MySelectTutorStudentYear />
      </MyFormItem>
      <MyFormItem
        name="schoolId"
        rules={[RULE_REQUIRED]}
        label="Sinh viên trường"
      >
        <MySelectHigherEducationSchool />
      </MyFormItem>
      <MyFormItem
        className="col-span-2"
        name="majorCode"
        rules={[RULE_REQUIRED]}
        label="Sinh viên ngành"
      >
        <MySelectTutorMajor />
      </MyFormItem>
      <MyFormItem
        name="fontStudentCardImage"
        rules={[RULE_REQUIRED]}
        label="Mặt trước thẻ sinh viên"
      >
        <MyUploadImageSingle />
      </MyFormItem>
      <MyFormItem
        name="backStudentCardImage"
        rules={[RULE_REQUIRED]}
        label="Mặt sau thẻ sinh viên"
      >
        <MyUploadImageSingle />
      </MyFormItem>
    </MyForm>
  );
};

export default MyFormTutorInfo;
