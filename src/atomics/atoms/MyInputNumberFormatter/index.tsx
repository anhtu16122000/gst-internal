"use client";
import MyInputNumber, { TMyInputNumberProps } from "@/bases/MyInputNumber";
import React from "react";

type TMyInputNumberFormatterProps = {} & TMyInputNumberProps;

const MyInputNumberFormatter: React.FC<TMyInputNumberFormatterProps> = (
  props,
) => {
  return (
    <MyInputNumber
      formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      {...props}
    />
  );
};

export default MyInputNumberFormatter;
