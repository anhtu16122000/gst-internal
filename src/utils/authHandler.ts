import { addTokenInstance } from "@/services";
import envHandler from "./envHandler";

const authHandler = {
  setToken(token: string) {
    if (envHandler.isClient()) {
      localStorage.setItem("token", token);
    }
  },
  getToken(): {
    accessToken: string;
  } {
    if (envHandler.isClient()) {
      const accessToken = localStorage.getItem("token");
      return {
        accessToken,
      };
    }
    return {
      accessToken: "",
    };
  },
  removeToken() {
    if (envHandler.isClient()) {
      localStorage.removeItem("token");
    }
  },
  injectToken(): void {
    if (envHandler.isClient()) {
      const { accessToken } = this.getToken();
      addTokenInstance(accessToken);
    }
  },
  handleLogout(router, setAuthData): void {
    router.replace("/signin");
    this.removeToken();
    setAuthData({});
  },
  handleLogin(router, setAuthData, token, data): void {
    router.replace("/");
    setAuthData(data);
    this.setToken(token);
  },
};
export default authHandler;
