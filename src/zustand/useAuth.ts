import AccountEntity from "@/types/entities/account.type";
import { create } from "zustand";
type State = {
  data: Partial<AccountEntity>;
  loading: boolean;
};
type Action = {
  setLoading: (loading: State["loading"]) => void;
  setData: (data: State["data"]) => void;
};

const useAuth = create<State & Action>()((set) => ({
  data: {},
  loading: true,
  setLoading: (loading: State["loading"]) =>
    set((state) => ({ loading: loading })),

  setData: (data: State["data"]) =>
    set(() => ({
      data: data,
    })),
}));

export default useAuth;
