"use client";

import accountService from "@/services/account";
import authHandler from "@/utils/authHandler";
import useAuth from "@/zustand/useAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useLayoutEffect } from "react";
import { Toaster } from "sonner";
import LoadingComp from "./LoadingComp";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

const ClientProviderInner = ({ children }) => {
  const loading = useAuth((state) => state.loading);
  const setAuthData = useAuth((state) => state.setData);
  const setLoading = useAuth((state) => state.setLoading);
  const { accessToken } = authHandler.getToken();
  useLayoutEffect(() => {
    if (accessToken) {
      authHandler.injectToken();
    }
  }, [accessToken]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await accountService.me();
        setAuthData(res.data.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [setAuthData, setLoading]);

  if (loading) {
    return <LoadingComp />;
  }

  return (
    <>
      <Toaster closeButton richColors />
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </>
  );
};

const ClientProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ClientProviderInner>{children}</ClientProviderInner>
    </QueryClientProvider>
  );
};

export default ClientProvider;
