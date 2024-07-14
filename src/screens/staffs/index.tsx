"use client";
import MyButtonActionType from "@/atomics/atoms/MyButtonActionType";
import MyModalAutoConfirm from "@/atomics/atoms/MyModalAutoConfirm";
import MyPageTitle from "@/atomics/atoms/MyPageTitle";
import MyStaffMini from "@/atomics/atoms/MyStaffMini";
import MyDropdown from "@/bases/MyDropdown";
import MySpin from "@/bases/MySpin";
import MyTable from "@/bases/MyTable";
import { PAGE_SIZE, STT_COLUMN } from "@/constants/common";
import withAuth from "@/hocs/withAuth";
import staffsService from "@/services/staffs";
import AccountEntity from "@/types/entities/account.type";
import { myToast } from "@/utils/toastHandler";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MenuProps } from "antd";
import moment from "moment";
import { parseAsInteger, useQueryState } from "nuqs";
import { BsThreeDotsVertical } from "react-icons/bs";
import ModalAddStaff from "./components/ModalAddStaff";
import ModalEditRoleStaff from "./components/ModalEditRoleStaff";
import ModalEditStaff from "./components/ModalEditStaff";

const StaffsScreen = (props) => {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: [
      "GET/staffs/find",
      {
        limit: PAGE_SIZE,
        page: page,
      },
    ],
    queryFn: () =>
      staffsService.get({
        limit: PAGE_SIZE,
        page: page,
      }),
  });
  const deleteStaff = useMutation({
    mutationFn: (id: string) => staffsService.delete(id),
    onSuccess: (data) => {
      myToast.success(data?.data?.message?.[0]);
      queryClient.invalidateQueries({
        queryKey: ["GET/staffs/find"],
      });
    },
    onError: (error: any) => {
      myToast.error(error.message);
    },
  });

  const staffs = data?.data?.data?.staffs || [];
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
        return <MyStaffMini {...account} />;
      },
    },
    {
      title: "Quyền",
      dataIndex: "staffRole",
      key: "staffRole",
      width: 100,
      render: (_, record: AccountEntity) => {
        return record?.staff?.role;
      },
    },
    {
      title: "Email",
      width: 200,
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Giới tính",
      width: 100,
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Ngày tạo",
      dataIndex: "staffCreatedAt",
      key: "staffCreatedAt",
      render: (_, record: AccountEntity) => {
        return moment(record?.staff?.createdAt).format("DD/MM/YYYY HH:mm:ss");
      },
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "staffUpdatedAt",
      key: "staffUpdatedAt",
      render: (_, record: AccountEntity) => {
        return moment(record?.staff?.updatedAt).format("DD/MM/YYYY HH:mm:ss");
      },
    },
    {
      title: "",
      width: 10,
      fixed: "right",
      key: "action",
      render: (_, record: AccountEntity) => {
        const items: MenuProps["items"] = [
          {
            key: "edit",
            label: <ModalEditStaff account={record} />,
          },
          {
            key: "grant",
            label: <ModalEditRoleStaff account={record} />,
          },
          {
            key: "delete",
            label: (
              <MyModalAutoConfirm
                onOk={async () => {
                  await deleteStaff.mutateAsync(record.id);
                }}
                type="delete"
                renderDisplayComponent={({ setOpen: setOpenModal }) => (
                  <MyButtonActionType
                    type="delete"
                    onClick={() => {
                      setOpenModal(true);
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
      <MyPageTitle>Danh sách nhân sự (Tổng cộng: {total})</MyPageTitle>
      <div className="flex gap-2 flex-col">
        <div className="flex justify-end">
          <ModalAddStaff />
        </div>
        <MySpin spinning={isLoading}>
          <MyTable
            pagination={{
              total: total,
              onChange(page) {
                setPage(page);
              },
            }}
            dataSource={staffs}
            columns={columns}
          />
        </MySpin>
      </div>
    </div>
  );
};

export default withAuth(StaffsScreen);
