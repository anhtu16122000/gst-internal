"use client";

import useAuth from "@/zustand/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// create HOC for redirect authentication function component
const withAuth = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const isAuthenticated = Boolean(useAuth((state) => state.data.id));
    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/signin");
      }
    }, [isAuthenticated, router, queryClient]);

    return <Component {...props} />;
  };
};

export default withAuth;
