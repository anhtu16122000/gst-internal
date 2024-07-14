import { BACKEND_URL } from "@/constants/common";

export const getUrlImage = (url: string | undefined): string | undefined => {
  if (!url) return undefined;
  return `${BACKEND_URL}/${url || "1715699386517___ten_anh (1).jpg"}`;
};

const imageHandler = {
  getUrlImage,
};

export default imageHandler;
