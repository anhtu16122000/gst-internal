import axios, { AxiosResponse } from "axios";

const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API || "";
const BACKEND_VERSION = process.env.NEXT_PUBLIC_BACKEND_VERSION || "";

const instance = axios.create({
  baseURL: `${BACKEND_API}/${BACKEND_VERSION}`,
  timeout: 10000, // Timeout sau 10 giây
  headers: {
    "Content-Type": "application/json",
  },
});

export const addTokenInstance = (token: string) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

instance.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (!!error?.response) {
      switch (error?.response?.status) {
        case 401:
          break;
        case 403:
          break;
        case 400:
          break;
        case 500:
          break;
        default:
      }
    }
    if (error?.response?.data) {
      return Promise.reject(error?.response?.data);
    }
    return Promise.reject(error);
  },
);

export default instance;
