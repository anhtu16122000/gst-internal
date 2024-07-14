"use client";
import MySelect, { TMySelectProps } from "@/bases/MySelect";
import higherEducationSchoolService from "@/services/higher-education-school";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export type TMySelectHigherEducationSchoolProps = {} & TMySelectProps;

const MySelectHigherEducationSchool: React.FC<
  TMySelectHigherEducationSchoolProps
> = (props) => {
  const { isLoading, data } = useQuery({
    queryKey: ["GET/higher-education-school"],
    queryFn: () => higherEducationSchoolService.find(),
  });
  const schools = data?.data?.data?.data || [];
  const total = data?.data?.data?.total;
  const options = schools.map((school) => ({
    label: school?.name,
    value: school?.id,
  }));

  return (
    <MySelect
      loading={isLoading}
      placeholder={`Chọn trong số ${total} trường`}
      options={options}
      {...props}
    />
  );
};

export default MySelectHigherEducationSchool;
