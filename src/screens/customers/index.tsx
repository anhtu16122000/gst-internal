"use client";
import MyButtonActionType from "@/atomics/atoms/MyButtonActionType";
import MyCustomerMini from "@/atomics/atoms/MyCustomerMini";
import MyModalAutoConfirm from "@/atomics/atoms/MyModalAutoConfirm";
import MyPageTitle from "@/atomics/atoms/MyPageTitle";
import MyDropdown from "@/bases/MyDropdown";
import MySpin from "@/bases/MySpin";
import MyTable from "@/bases/MyTable";
import { OBJ_GENDER, PAGE_SIZE, STT_COLUMN } from "@/constants/common";
import withAuth from "@/hocs/withAuth";
import customersService from "@/services/customer";
import AccountEntity from "@/types/entities/account.type";
import numberHandler from "@/utils/numberHandler";
import { myToast } from "@/utils/toastHandler";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MenuProps } from "antd";
import HTMLReactParser from "html-react-parser";
import { useQueryStates } from "nuqs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { searchOptions } from "./common";
import ModalEditCustomer from "./components/ModalEditCustomer";

const CustomersScreen = (props) => {
  const queryClient = useQueryClient();
  const [queryStates, setQueryStates] = useQueryStates(searchOptions, {
    shallow: false,
  });
  const { page } = queryStates;

  const { data, isLoading } = useQuery({
    queryKey: [
      "GET/customers/find",
      {
        limit: PAGE_SIZE,
        ...queryStates,
      },
    ],
    queryFn: async () => {
      try {
        const res = await customersService.find({
          limit: PAGE_SIZE,
          ...queryStates,
        });
        return res;
      } catch (error) {
        myToast.error(error?.message[0]);
      }
    },
  });
  const deleteStaff = useMutation({
    mutationFn: (id: string) => customersService.delete(id),
    onSuccess: (data) => {
      myToast.success(data?.data?.message?.[0]);
      queryClient.invalidateQueries({
        queryKey: ["GET/customers/find"],
      });
    },
    onError: (error: any) => {
      myToast.error(error.message[0]);
    },
  });

  const customers = data?.data?.data?.customers || [];
  const total = data?.data?.data?.total || 0;

  const columns = [
    STT_COLUMN({
      page: page,
      pageSize: PAGE_SIZE,
    }),
    {
      title: "Thông tin",
      dataIndex: "information",
      key: "information",
      width: 250,
      render: (_, account: AccountEntity) => {
        return <MyCustomerMini {...account} />;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      render: (gender) => {
        return OBJ_GENDER?.[gender]?.label;
      },
    },
    {
      title: "Ghi chú",
      dataIndex: "customer.note",
      key: "customer.note",
      render: (_, record) => {
        return record?.customer?.note ? (
          <p className="whitespace-pre-wrap">
            {HTMLReactParser(record?.customer?.note)}
          </p>
        ) : (
          "Không có"
        );
      },
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      fixed: "right",
      width: 50,
      render: (_, account: AccountEntity) => {
        const items: MenuProps["items"] = [
          {
            key: "edit",
            label: <ModalEditCustomer account={account} />,
          },
          {
            key: "delte",
            label: (
              <MyModalAutoConfirm
                onOk={async () => {
                  await deleteStaff.mutateAsync(account.id);
                }}
                type="delete"
                renderDisplayComponent={({ setOpen }) => (
                  <MyButtonActionType
                    type="delete"
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                )}
              />
            ),
          },
        ];
        return (
          <MyDropdown menu={{ items }} placement="topRight" arrow>
            <BsThreeDotsVertical size={20} />
          </MyDropdown>
        );
      },
    },
  ];

  return (
    <div>
      <MyPageTitle>
        Danh sách phụ huynh (Tổng cộng: {numberHandler.formatNumber(total)})
      </MyPageTitle>
      <MySpin spinning={isLoading}>
        <MyTable
          pagination={{
            total: total,
            onChange(page) {
              setQueryStates({
                page: page,
              });
            },
          }}
          dataSource={customers}
          columns={columns}
        />
      </MySpin>
    </div>
  );
};

export default withAuth(CustomersScreen);
