"use client";
import MyButtonActionType from "@/atomics/atoms/MyButtonActionType";
import MyCustomerMini from "@/atomics/atoms/MyCustomerMini";
import MyModalAutoConfirm from "@/atomics/atoms/MyModalAutoConfirm";
import MyPageTitle from "@/atomics/atoms/MyPageTitle";
import MyDropdown from "@/bases/MyDropdown";
import MySpin from "@/bases/MySpin";
import MyTable from "@/bases/MyTable";
import { OBJ_REQUIRED_GENDER, PAGE_SIZE, STT_COLUMN } from "@/constants/common";
import withAuth from "@/hocs/withAuth";
import classesService from "@/services/classes";
import AddressOfAccountEntity from "@/types/entities/AddressOfAccount.type";
import ClassEntity from "@/types/entities/class.type";
import { REQUIRED_GENDER } from "@/types/enum";
import numberHandler from "@/utils/numberHandler";
import { myToast } from "@/utils/toastHandler";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MenuProps } from "antd";
import { useQueryStates } from "nuqs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { searchOptions } from "./common";
import FilterSectionClasses from "./components/FilterSectionClasses";
import ModalEditClass from "./components/ModalEditClass";
import ModalTutorRegister from "./components/ModalTutorRegister";

const ClassesScreen = (props) => {
  const [queryStates, setQueryStates] = useQueryStates(searchOptions, {
    shallow: false,
  });
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: [
      "GET/classes/find-all",
      {
        limit: PAGE_SIZE,
        ...queryStates,
      },
    ],
    queryFn: async () => {
      try {
        const res = await classesService.getAll({
          limit: PAGE_SIZE,
          ...queryStates,
        });
        return res;
      } catch (error) {
        myToast.error(error?.message[0]);
      }
    },
  });

  const deleteClass = useMutation({
    mutationFn: (id: string) => classesService.delete(id),
    onSuccess: (data) => {
      myToast.success(data?.data?.message?.[0]);
      queryClient.invalidateQueries({
        queryKey: ["GET/classes/find-all"],
      });
    },
    onError: (error: any) => {
      myToast.error(error.message[0]);
    },
  });

  const classes = data?.data?.data?.data || [];
  console.log("classes", classes);
  const total = data?.data?.data?.total || 0;

  const columns = [
    STT_COLUMN({
      page: queryStates.page,
      pageSize: PAGE_SIZE,
    }),
    {
      title: "Phụ huynh",
      dataIndex: "information",
      key: "information",
      render: (_, _class: ClassEntity) => {
        return <MyCustomerMini {..._class?.account} />;
      },
    },
    {
      title: "Lương",
      dataIndex: "salary",
      key: "salary",
      align: "right",
      render: (salary) => {
        return numberHandler.formatNumber(salary);
      },
    },
    {
      title: "Số buổi dạy/tuần",
      dataIndex: "sessionPerWeek",
      key: "sessionPerWeek",
      align: "right",
      render: (sessionPerWeek) => {
        return numberHandler.formatNumber(sessionPerWeek);
      },
    },
    {
      title: "Địa chỉ",
      dataIndex: "addressOfAccount",
      key: "addressOfAccount",
      width: 280,
      render: (addressOfAccount: AddressOfAccountEntity) => {
        const { province, address, ward, district } = addressOfAccount;
        return `${address}, ${province?.fullName}, ${district?.fullName}, ${ward?.fullName}`;
      },
    },
    {
      title: "Hình thức dạy",
      dataIndex: "teachingMethod",
      key: "teachingMethod",
    },
    {
      title: "Giới tính yêu cầu",
      dataIndex: "requiredGender",
      key: "requiredGender",
      render: (requiredGender: REQUIRED_GENDER) => {
        return OBJ_REQUIRED_GENDER?.[requiredGender]?.label;
      },
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      fixed: "right",
      width: 50,
      render: (_, _class: ClassEntity) => {
        const items: MenuProps["items"] = [
          {
            key: "edit",
            label: <ModalEditClass _class={_class} />,
          },
          {
            key: "delete",
            label: (
              <MyModalAutoConfirm
                onOk={async () => {
                  await deleteClass.mutateAsync(_class.id);
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
          <div className="flex gap-2 items-center">
            <ModalTutorRegister
              registerClasses={_class?.registerClasses || []}
            />
            <MyDropdown menu={{ items }} placement="topRight" arrow>
              <BsThreeDotsVertical size={20} />
            </MyDropdown>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <MyPageTitle>
        Danh sách lớp (Tổng cộng: {numberHandler.formatNumber(total)})
      </MyPageTitle>
      <div className="flex gap-2 flex-col">
        <FilterSectionClasses />

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
            dataSource={classes}
            columns={columns}
          />
        </MySpin>
      </div>
    </div>
  );
};

export default withAuth(ClassesScreen);
