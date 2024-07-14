"use client";
import MyInputNumberFormatter from "@/atomics/atoms/MyInputNumberFormatter";
import MySelectGender from "@/atomics/atoms/MySelectGender";
import MySelectHigherEducationSchool from "@/atomics/atoms/MySelectHigherEducationSchool";
import MySelectSubjects from "@/atomics/atoms/MySelectSubjects";
import MySelectTeachingClassType from "@/atomics/atoms/MySelectTeachingClassType";
import MySelectTeachingMethod from "@/atomics/atoms/MySelectTeachingMethod";
import MyForm from "@/bases/MyForm";
import { useQueryStates } from "nuqs";

import MySelectTutorStatus from "@/atomics/atoms/MySelectTutorStatus";
import MyCard from "@/bases/MyCard";
import MyFormItem from "@/bases/MyFormItem";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { searchOptions } from "../searchOptions";

const FilterSection = () => {
  const [queryStates, setQueryStates] = useQueryStates(searchOptions, {
    shallow: false,
  });
  const {
    teachingClassTypeCodes,
    schoolId,
    gender,
    minSalary,
    profileStatus,
    maxSalary,
    teachingMethod,
    subjectCodes,
  } = queryStates || {};

  const [minSalaryState, setMinSalaryState] = useState<number>(minSalary);
  const [maxSalaryState, setMaxSalaryState] = useState<number>(maxSalary);

  useEffect(() => {
    setMinSalaryState(minSalary);
  }, [minSalary]);
  useEffect(() => {
    setMaxSalaryState(maxSalary);
  }, [maxSalary]);

  return (
    <MyCard title="Bộ lọc" className="col-span-2 h-fit">
      <MyForm className="grid grid-cols-4 gap-2">
        <MyFormItem label="Mức lương/giờ">
          <div className="flex gap-1 items-center">
            <MyInputNumberFormatter
              value={minSalaryState || null}
              placeholder="Thất nhất"
              onChange={(value) => {
                setMinSalaryState((value || 0) as number);
              }}
              onChangeDebounce={(value) => {
                setQueryStates({
                  minSalary: (value || 0) as number,
                });
              }}
            />
            <FaArrowRight className="flex-shrink-0" />
            <MyInputNumberFormatter
              value={maxSalaryState || null}
              onChange={(value) => {
                setMaxSalaryState((value || 0) as number);
              }}
              onChangeDebounce={(value) => {
                setQueryStates({
                  maxSalary: (value || 0) as number,
                });
              }}
              placeholder="Cao nhất"
            />
          </div>
        </MyFormItem>
        <MyFormItem label="Lọc theo loại lớp">
          <MySelectTeachingClassType
            value={teachingClassTypeCodes}
            onChange={(values) => {
              setQueryStates({
                teachingClassTypeCodes: values,
              });
            }}
            className="w-full"
            allowClear
            mode="multiple"
          />
        </MyFormItem>
        <MyFormItem label="Lọc theo giới tính">
          <MySelectGender
            value={gender}
            onChange={(values) => {
              setQueryStates({
                gender: values,
              });
            }}
            className="w-full"
            allowClear
            mode="multiple"
          />
        </MyFormItem>
        <MyFormItem label="Tình trạng hồ sơ">
          <MySelectTutorStatus
            value={profileStatus}
            onChange={(values) => {
              setQueryStates({
                profileStatus: values,
              });
            }}
            className="w-full"
            allowClear
            mode="multiple"
          />
        </MyFormItem>
        <MyFormItem className="col-span-2" label="Lọc theo trường">
          <MySelectHigherEducationSchool
            value={schoolId}
            onChange={(values) => {
              setQueryStates({
                schoolId: values,
              });
            }}
            className="w-full"
            allowClear
            mode="multiple"
          />
        </MyFormItem>
        <MyFormItem label="Lọc theo hình thức giảng dạy">
          <MySelectTeachingMethod
            className="w-full"
            allowClear
            value={teachingMethod || null}
            onChange={(value) => {
              setQueryStates({
                teachingMethod: value || null,
              });
            }}
          />
        </MyFormItem>
        <MyFormItem label="Lọc theo môn học">
          <MySelectSubjects
            className="w-full"
            allowClear
            mode="multiple"
            value={subjectCodes}
            onChange={(values) => {
              setQueryStates({
                subjectCodes: values,
              });
            }}
          />
        </MyFormItem>
      </MyForm>
    </MyCard>
  );
};

export default FilterSection;
