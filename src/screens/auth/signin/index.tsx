"use client";
import MyButton from "@/bases/MyButton";
import MyForm from "@/bases/MyForm";
import MyFormItem from "@/bases/MyFormItem";
import MyInputPassword from "@/bases/MyInputPassword";
import { RULE_REQUIRED } from "@/constants/common";
import withAuth from "@/hocs/withAuth";
import staffsService from "@/services/staffs";
import authHandler from "@/utils/authHandler";
import { myToast } from "@/utils/toastHandler";
import useAuth from "@/zustand/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { FormProps, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type FieldType = {
  username?: string;
  password?: string;
};

const SignInPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const setAuthData = useAuth((state) => state.setData);
  const queryClient = useQueryClient();
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    try {
      const { username, password } = values;
      const { data } = await staffsService.login({
        username,
        password,
      });
      myToast.success("Đăng nhập thành công");
      authHandler.handleLogin(
        router,
        setAuthData,
        data?.data?.accessToken,
        data.data.account,
      );
    } catch (error) {
      myToast.error(error?.message?.[0]);
    }
    setLoading(false);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" border bg-white rounded-lg p-6">
        <p className="text-xl text-center">Đăng nhập</p>
        <MyForm
          className="min-w-[450px]"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <MyFormItem label="Username" name="username" rules={[RULE_REQUIRED]}>
            <Input />
          </MyFormItem>
          <MyFormItem label="Password" name="password" rules={[RULE_REQUIRED]}>
            <MyInputPassword />
          </MyFormItem>

          <MyButton loading={loading} type="primary" htmlType="submit">
            Đăng nhập
          </MyButton>
        </MyForm>
      </div>
    </div>
  );
};

export default withAuth(SignInPage);
