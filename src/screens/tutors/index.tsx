import MyButtonActionType from "@/atomics/atoms/MyButtonActionType";
import MyModalAutoConfirm from "@/atomics/atoms/MyModalAutoConfirm";
import MyPageTitle from "@/atomics/atoms/MyPageTitle";
import MyTutorMini from "@/atomics/atoms/MyTutorMini";
import MyDropdown from "@/bases/MyDropdown";
import MySpin from "@/bases/MySpin";
import MyTable from "@/bases/MyTable";
import {
  OBJECT_TUTOR_PROFILE_STATUS,
  PAGE_SIZE,
  STT_COLUMN,
} from "@/constants/common";
import tutorsService from "@/services/tutors";
import AccountEntity from "@/types/entities/account.type";
import { myToast } from "@/utils/toastHandler";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MenuProps } from "antd";
import { useQueryStates } from "nuqs";
import { BsThreeDotsVertical } from "react-icons/bs";
import FilterSection from "./components/FilterSection";
import ModalChangeStatus from "./components/ModalChangeStatus";
import ModalEditTutor from "./components/ModalEditTutor";
import { searchOptions } from "./searchOptions";

const TutorsPage = () => {
  const [queryStates, setQueryStates] = useQueryStates(searchOptions, {
    shallow: false,
  });

  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: [
      "GET/tutors/find",
      {
        limit: PAGE_SIZE,
        ...queryStates,
      },
    ],
    queryFn: async () => {
      try {
        const res = await tutorsService.find({
          limit: PAGE_SIZE,
          ...queryStates,
        });
        return res;
      } catch (error) {
        myToast.error(error?.message[0]);
      }
    },
  });
  const tutors = data?.data?.data?.tutors || [];
  const total = data?.data?.data?.total || 0;

  const deleteStaff = useMutation({
    mutationFn: (id: string) => tutorsService.delete(id),
    onSuccess: (data) => {
      myToast.success(data?.data?.message?.[0]);
      queryClient.invalidateQueries({
        queryKey: ["GET/tutors/find"],
      });
    },
    onError: (error: any) => {
      myToast.error(error.message);
    },
  });

  const columns = [
    STT_COLUMN({
      page: queryStates.page,
      pageSize: PAGE_SIZE,
    }),
    {
      title: "Thông tin",
      dataIndex: "information",
      key: "information",
      width: 250,
      render: (_, account: AccountEntity) => {
        return <MyTutorMini {...account} />;
      },
    },
    {
      title: "Học vấn",
      dataIndex: "education",
      width: 200,
      key: "education",
      render: (_, account: AccountEntity) => {
        if (!account?.tutor) return "";
        const {
          tutor: { school, studentYear },
        } = account;
        return (
          <div className="flex flex-col">
            <p>Trường: {school?.name}</p>
            <p>Năm: {studentYear}</p>
          </div>
        );
      },
    },
    {
      title: "Tình trạng",
      dataIndex: "tutor",
      width: 200,
      key: "profileStatus",
      render: (tutor) => {
        return tutor?.profileStatus
          ? OBJECT_TUTOR_PROFILE_STATUS[tutor?.profileStatus]?.tag
          : "Không có";
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: 200,
      render: (_, account: AccountEntity) => {
        return account?.tutor?.phoneNumber || "";
      },
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      width: 350,
      render: (_, account: AccountEntity) => {
        const { tutor } = account;
        if (!tutor) return "";
        const { address, province, district, ward } = tutor || {};
        return `${address}, ${ward?.fullName}, ${district?.fullName}, ${province?.fullName}`;
      },
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      width: 50,
      render: (_, account: AccountEntity) => {
        const items: MenuProps["items"] = [
          {
            key: "change-status",
            label: <ModalChangeStatus account={account} />,
          },
          {
            key: "edit",
            label: <ModalEditTutor account={account} />,
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
      <MyPageTitle>Danh sách gia sư (Tổng cộng: {total})</MyPageTitle>
      <div className="flex gap-2 flex-col">
        <FilterSection />

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
            dataSource={tutors}
            columns={columns}
          />
        </MySpin>
      </div>
    </div>
  );
};

export default TutorsPage;
