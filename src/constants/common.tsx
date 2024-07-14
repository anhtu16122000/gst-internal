import MyTag from "@/bases/MyTag";
import {
  GENDER,
  REQUIRED_GENDER,
  SUBJECT,
  TEACHING_METHOD,
  TUTOR_MAJOR,
  TUTOR_PROFILE_STATUS,
  TeachingClassType,
} from "@/types/enum";
import { VIETNAMESE_PHONE_NUMBER_REGEX } from "@/utils/common";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API || "";
const BACKEND_VERSION = process.env.NEXT_PUBLIC_BACKEND_VERSION || "";
export const BACKEND_URL = `${BACKEND_API}/${BACKEND_VERSION}`;
export const RULE_REQUIRED = {
  required: true,
  message: "Thông tin này là bắt buộc",
};
export const RULE_PHONE_NUMBER = {
  pattern: VIETNAMESE_PHONE_NUMBER_REGEX,
  message: "Số điện thoại không hợp lệ",
};

export const PAGE_SIZE = 30;

export const STT_COLUMN = ({ page, pageSize }): any => ({
  title: "STT",
  fixed: "left",
  with: 80,
  dataIndex: "stt",
  key: "stt",
  align: "center",
  render: (text, record, index) => index + 1 + (page - 1) * pageSize,
});

export const OBJ_GENDER = {
  [GENDER.MALE]: {
    label: "Nam",
    value: GENDER.MALE,
  },
  [GENDER.FEMALE]: {
    label: "Nữ",
    value: GENDER.FEMALE,
  },
  [GENDER.OTHER]: {
    label: "Khác",
    value: GENDER.OTHER,
  },
};

export const OBJ_TEACHING_METHOD = {
  [TEACHING_METHOD.ONLINE]: {
    label: "Online",
    value: TEACHING_METHOD.ONLINE,
  },
  [TEACHING_METHOD.OFFLINE]: {
    label: "Offline",
    value: TEACHING_METHOD.OFFLINE,
  },
  [TEACHING_METHOD.ONLINE_AND_OFFLINE]: {
    label: "Online và Offline",
    value: TEACHING_METHOD.ONLINE_AND_OFFLINE,
  },
};

export const OBJ_TEACHING_CLASS_TYPE = {
  [TeachingClassType.Kindergarten]: {
    label: "Lớp lá",
    value: TeachingClassType.Kindergarten,
  },
  [TeachingClassType.Grade1]: {
    label: "Lớp 1",
    value: TeachingClassType.Grade1,
  },
  [TeachingClassType.Grade2]: {
    label: "Lớp 2",
    value: TeachingClassType.Grade2,
  },
  [TeachingClassType.Grade3]: {
    label: "Lớp 3",
    value: TeachingClassType.Grade3,
  },
  [TeachingClassType.Grade4]: {
    label: "Lớp 4",
    value: TeachingClassType.Grade4,
  },
  [TeachingClassType.Grade5]: {
    label: "Lớp 5",
    value: TeachingClassType.Grade5,
  },
  [TeachingClassType.Grade6]: {
    label: "Lớp 6",
    value: TeachingClassType.Grade6,
  },
  [TeachingClassType.Grade7]: {
    label: "Lớp 7",
    value: TeachingClassType.Grade7,
  },
  [TeachingClassType.Grade8]: {
    label: "Lớp 8",
    value: TeachingClassType.Grade8,
  },
  [TeachingClassType.Grade9]: {
    label: "Lớp 9",
    value: TeachingClassType.Grade9,
  },
  [TeachingClassType.Grade10]: {
    label: "Lớp 10",
    value: TeachingClassType.Grade10,
  },
  [TeachingClassType.Grade11]: {
    label: "Lớp 11",
    value: TeachingClassType.Grade11,
  },
  [TeachingClassType.Grade12]: {
    label: "Lớp 12",
    value: TeachingClassType.Grade12,
  },
  [TeachingClassType.CollegeEntranceExamPreparation]: {
    label: "Ôn thi đại học",
    value: TeachingClassType.CollegeEntranceExamPreparation,
  },
  [TeachingClassType.EnglishMediumInstruction]: {
    label: "Ôn thi tiếng anh",
    value: TeachingClassType.EnglishMediumInstruction,
  },
  [TeachingClassType.TeachingAutisticChildren]: {
    label: "Dạy trẻ tự kỷ",
    value: TeachingClassType.TeachingAutisticChildren,
  },
  [TeachingClassType.SpecializedHighSchoolExamPreparation]: {
    label: "Ôn thi trường chuyên",
    value: TeachingClassType.SpecializedHighSchoolExamPreparation,
  },
};

export const OBJ_SUBJECT = {
  [SUBJECT.MATH]: {
    label: "Toán",
    value: SUBJECT.MATH,
  },
  [SUBJECT.ENGLISH]: {
    label: "Tiếng Anh",
    value: SUBJECT.ENGLISH,
  },
  [SUBJECT.LITERATURE]: {
    label: "Văn học",
    value: SUBJECT.LITERATURE,
  },
  [SUBJECT.HISTORY]: {
    label: "Lịch sử",
    value: SUBJECT.HISTORY,
  },
  [SUBJECT.PHYSICS]: {
    label: "Vật lý",
    value: SUBJECT.PHYSICS,
  },
  [SUBJECT.CHEMISTRY]: {
    label: "Hóa học",
    value: SUBJECT.CHEMISTRY,
  },
};

export const OBJECT_TUTOR_PROFILE_STATUS = {
  [TUTOR_PROFILE_STATUS.WAIT_FOR_APPROVE]: {
    label: "Chờ duyệt",
    value: TUTOR_PROFILE_STATUS.WAIT_FOR_APPROVE,
    tag: (
      <MyTag icon={<SyncOutlined spin />} color="processing">
        Chờ duyệt
      </MyTag>
    ),
  },
  [TUTOR_PROFILE_STATUS.APPROVED]: {
    label: "Đã duyệt",
    value: TUTOR_PROFILE_STATUS.APPROVED,
    tag: (
      <MyTag icon={<CheckCircleOutlined />} color="success">
        Đã duyệt
      </MyTag>
    ),
  },
  [TUTOR_PROFILE_STATUS.REJECTED]: {
    label: "Từ chối",
    value: TUTOR_PROFILE_STATUS.REJECTED,
    tag: (
      <MyTag icon={<CloseCircleOutlined />} color="error">
        Từ chối
      </MyTag>
    ),
  },
};

export const OBJ_TUTOR_STUDENT_YEAR = {
  1: {
    label: "Năm nhất",
    value: 1,
  },
  2: {
    label: "Năm hai",
    value: 2,
  },
  3: {
    label: "Năm ba",
    value: 3,
  },
  4: {
    label: "Năm bốn",
    value: 4,
  },
  5: {
    label: "Năm năm",
    value: 5,
  },
  6: {
    label: "Năm sáu",
    value: 6,
  },
  7: {
    label: "Năm bảy",
    value: 7,
  },
};
export const OBJECT_TUTOR_MAJOR = {
  [TUTOR_MAJOR.PEDAGOGY_MATHEMATICS]: {
    label: "Sư Phạm toán",
    value: TUTOR_MAJOR.PEDAGOGY_MATHEMATICS,
  },
  [TUTOR_MAJOR.PEDAGOGY_CHEMISTRY]: {
    label: "Sư Phạm Hóa Học",
    value: TUTOR_MAJOR.PEDAGOGY_CHEMISTRY,
  },
  [TUTOR_MAJOR.PEDAGOGY_ENGLISH]: {
    label: "Sư Phạm Tiếng Anh",
    value: TUTOR_MAJOR.PEDAGOGY_ENGLISH,
  },
  [TUTOR_MAJOR.PEDAGOGY_COMPUTER_SCIENCE]: {
    label: "Sư Phạm Tin Học",
    value: TUTOR_MAJOR.PEDAGOGY_COMPUTER_SCIENCE,
  },
  [TUTOR_MAJOR.PEDAGOGY_LITERATURE]: {
    label: "Sư Phạm Ngữ Văn",
    value: TUTOR_MAJOR.PEDAGOGY_LITERATURE,
  },
  [TUTOR_MAJOR.PEDAGOGY_HISTORY]: {
    label: "Sư Phạm Lịch Sử",
    value: TUTOR_MAJOR.PEDAGOGY_HISTORY,
  },
  [TUTOR_MAJOR.PEDAGOGY_GEOGRAPHY]: {
    label: "Sư Phạm Địa Lý",
    value: TUTOR_MAJOR.PEDAGOGY_GEOGRAPHY,
  },
  [TUTOR_MAJOR.PEDAGOGY_BIOLOGY]: {
    label: "Sư Phạm Sinh Học",
    value: TUTOR_MAJOR.PEDAGOGY_BIOLOGY,
  },
  [TUTOR_MAJOR.PEDAGOGY_MUSIC]: {
    label: "Sư Phạm Âm Nhạc",
    value: TUTOR_MAJOR.PEDAGOGY_MUSIC,
  },
  [TUTOR_MAJOR.EARLY_CHILDHOOD_EDUCATION]: {
    label: "Giáo Dục Mầm Non",
    value: TUTOR_MAJOR.EARLY_CHILDHOOD_EDUCATION,
  },
  [TUTOR_MAJOR.PEDAGOGY_EARLY_CHILDHOOD]: {
    label: "Sư Phạm Giáo Dục Mầm Non",
    value: TUTOR_MAJOR.PEDAGOGY_EARLY_CHILDHOOD,
  },
  [TUTOR_MAJOR.ELEMENTARY_EDUCATION]: {
    label: "Giáo Dục Tiểu Học",
    value: TUTOR_MAJOR.ELEMENTARY_EDUCATION,
  },
  [TUTOR_MAJOR.PEDAGOGY_ELEMENTARY]: {
    label: "Sư Phạm Giáo Dục Tiểu Học",
    value: TUTOR_MAJOR.PEDAGOGY_ELEMENTARY,
  },
  [TUTOR_MAJOR.SPECIAL_EDUCATION]: {
    label: "Giáo Dục Đặc Biệt",
    value: TUTOR_MAJOR.SPECIAL_EDUCATION,
  },
  [TUTOR_MAJOR.ENGLISH_LANGUAGE]: {
    label: "Ngôn Ngữ Anh",
    value: TUTOR_MAJOR.ENGLISH_LANGUAGE,
  },
  [TUTOR_MAJOR.BUSINESS_ENGLISH]: {
    label: "Tiếng Anh Thương Mại",
    value: TUTOR_MAJOR.BUSINESS_ENGLISH,
  },
  [TUTOR_MAJOR.JAPANESE_LANGUAGE]: {
    label: "Ngôn Ngữ Nhật",
    value: TUTOR_MAJOR.JAPANESE_LANGUAGE,
  },
  [TUTOR_MAJOR.JAPANESE_STUDIES]: {
    label: "Nhật Bản Học",
    value: TUTOR_MAJOR.JAPANESE_STUDIES,
  },
  [TUTOR_MAJOR.PEDAGOGY_CHINESE_LANGUAGE]: {
    label: "Sư Phạm Tiếng Trung",
    value: TUTOR_MAJOR.PEDAGOGY_CHINESE_LANGUAGE,
  },
  [TUTOR_MAJOR.CHINESE_LANGUAGE]: {
    label: "Ngôn Ngữ Trung",
    value: TUTOR_MAJOR.CHINESE_LANGUAGE,
  },
  [TUTOR_MAJOR.MATH_COMPUTER_SCIENCE]: {
    label: "Toán Tin",
    value: TUTOR_MAJOR.MATH_COMPUTER_SCIENCE,
  },
  [TUTOR_MAJOR.INFORMATION_TECHNOLOGY]: {
    label: "Công Nghệ Thông Tin",
    value: TUTOR_MAJOR.INFORMATION_TECHNOLOGY,
  },
  [TUTOR_MAJOR.ACCOUNTING]: {
    label: "Kế Toán",
    value: TUTOR_MAJOR.ACCOUNTING,
  },
  [TUTOR_MAJOR.AUDIT]: {
    label: "Kiểm Toán",
    value: TUTOR_MAJOR.AUDIT,
  },
  [TUTOR_MAJOR.ACCOUNTING_AUDIT]: {
    label: "Kế Toán - Kiểm Toán",
    value: TUTOR_MAJOR.ACCOUNTING_AUDIT,
  },
  [TUTOR_MAJOR.FINANCE_BANKING]: {
    label: "Tài Chính - Ngân Hàng",
    value: TUTOR_MAJOR.FINANCE_BANKING,
  },
  [TUTOR_MAJOR.BUSINESS_MANAGEMENT]: {
    label: "Quản Trị Kinh Doanh",
    value: TUTOR_MAJOR.BUSINESS_MANAGEMENT,
  },
  [TUTOR_MAJOR.KOREAN_LANGUAGE]: {
    label: "Ngôn Ngữ Hàn",
    value: TUTOR_MAJOR.KOREAN_LANGUAGE,
  },
  [TUTOR_MAJOR.RUSSIAN_LANGUAGE]: {
    label: "Ngôn Ngữ Nga",
    value: TUTOR_MAJOR.RUSSIAN_LANGUAGE,
  },
  [TUTOR_MAJOR.PEDAGOGY_RUSSIAN_LANGUAGE]: {
    label: "Sư Phạm Tiếng Nga",
    value: TUTOR_MAJOR.PEDAGOGY_RUSSIAN_LANGUAGE,
  },
  [TUTOR_MAJOR.FRENCH_LANGUAGE]: {
    label: "Ngôn Ngữ Pháp",
    value: TUTOR_MAJOR.FRENCH_LANGUAGE,
  },
  [TUTOR_MAJOR.PEDAGOGY_FRENCH_LANGUAGE]: {
    label: "Sư Phạm Tiếng Pháp",
    value: TUTOR_MAJOR.PEDAGOGY_FRENCH_LANGUAGE,
  },
  [TUTOR_MAJOR.FOREIGN_LANGUAGES]: {
    label: "Ngoại Ngữ",
    value: TUTOR_MAJOR.FOREIGN_LANGUAGES,
  },
};

export const OBJ_REQUIRED_GENDER = {
  [REQUIRED_GENDER.MALE]: {
    label: "Nam",
    value: REQUIRED_GENDER.MALE,
  },
  [REQUIRED_GENDER.FEMALE]: {
    label: "Nữ",
    value: REQUIRED_GENDER.FEMALE,
  },
  [REQUIRED_GENDER.NOT_REQUIRED]: {
    label: "Không yêu cầu",
    value: REQUIRED_GENDER.NOT_REQUIRED,
  },
};

export const OBJ_SESSION_PER_WEEK = {
  [1]: {
    label: "1 buổi/tuần",
    value: 1,
  },
  [2]: {
    label: "2 buổi/tuần",
    value: 2,
  },
  [3]: {
    label: "3 buổi/tuần",
    value: 3,
  },
  [4]: {
    label: "4 buổi/tuần",
    value: 4,
  },
  [5]: {
    label: "5 buổi/tuần",
    value: 5,
  },
  [6]: {
    label: "6 buổi/tuần",
    value: 6,
  },
  [7]: {
    label: "7 buổi/tuần",
    value: 7,
  },
  [8]: {
    label: "8 buổi/tuần",
    value: 8,
  },
  [9]: {
    label: "9 buổi/tuần",
    value: 9,
  },
  [10]: {
    label: "8 buổi/tuần",
    value: 10,
  },
};
