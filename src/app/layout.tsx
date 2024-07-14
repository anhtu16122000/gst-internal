"use client";
import ClientProvider from "@/layouts/ClientProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import viVN from "antd/locale/vi_VN";
import moment from "moment";
import "./globals.css";
import { ConfigProvider } from "antd";
moment.locale("vi");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="bg-[#ecf0f3]">
        <AntdRegistry>
          <ConfigProvider locale={viVN}>
            <ClientProvider>{children}</ClientProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
