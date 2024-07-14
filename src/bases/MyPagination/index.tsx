"use client";
import { PAGE_SIZE } from "@/constants/variable-internal";
import { Pagination } from "antd";
import { PaginationProps } from "antd/lib";
import React from "react";

type TMyPaginationProps = {} & PaginationProps;

const MyPagination: React.FC<TMyPaginationProps> = (props) => {
  return <Pagination showSizeChanger={false} pageSize={PAGE_SIZE} {...props} />;
};

export default MyPagination;
