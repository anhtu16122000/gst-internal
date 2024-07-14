import { TApiResponse } from "@/types/common.type";
import instance from "..";

const URL = "/files";

const filesService = {
  // POST /files/image-upload
  imageUpload(image) {
    const formData = new FormData();
    formData.append("file", image);
    return instance.post<TApiResponse<any>>(`${URL}/image-upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
export default filesService;
