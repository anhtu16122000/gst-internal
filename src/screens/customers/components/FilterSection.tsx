"use client";
import MySelectGender from "@/atomics/atoms/MySelectGender";
import MyForm from "@/bases/MyForm";
import { useQueryStates } from "nuqs";

import MyCard from "@/bases/MyCard";
import MyFormItem from "@/bases/MyFormItem";
import MyInput from "@/bases/MyInput";
import { useEffect, useState } from "react";
import { searchOptions } from "../common";

const FilterSection = () => {
  const [queryStates, setQueryStates] = useQueryStates(searchOptions, {
    shallow: false,
  });
  const { code, gender, phoneNumber } = queryStates || {};
  const [stateCode, setStateCode] = useState<string>(code);
  const [statePhoneNumber, setStatePhoneNumber] = useState<string>(phoneNumber);

  useEffect(() => {
    setStateCode(code);
  }, [code]);
  useEffect(() => {
    setStatePhoneNumber(phoneNumber);
  }, [phoneNumber]);

  return (
    <MyCard title="Bộ lọc" className="col-span-2 h-fit">
      <MyForm className="grid grid-cols-4 gap-2">
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
        <MyFormItem label="Mã">
          <MyInput
            value={stateCode || null}
            onChange={(e) => {
              setStateCode(e?.target?.value || "");
            }}
            onChangeDebounce={(e) => {
              setQueryStates({
                code: e?.target?.value || "",
              });
            }}
          />
        </MyFormItem>
        <MyFormItem label="Số điện thoại">
          <MyInput
            value={statePhoneNumber || null}
            onChange={(e) => {
              setStatePhoneNumber(e?.target?.value || "");
            }}
            onChangeDebounce={(e) => {
              setQueryStates({
                phoneNumber: e?.target?.value || "",
              });
            }}
          />
        </MyFormItem>
      </MyForm>
    </MyCard>
  );
};

export default FilterSection;
