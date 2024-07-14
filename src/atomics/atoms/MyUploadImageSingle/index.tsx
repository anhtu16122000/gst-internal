/* eslint-disable jsx-a11y/alt-text */
import MyUpload, { TMyUploadProps } from "@/bases/MyUpload";
import filesService from "@/services/files";
import { myToast } from "@/utils/toastHandler";
import { PlusOutlined } from "@ant-design/icons";
import { Image, type GetProp, type UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { LiaTimesSolid } from "react-icons/lia";

import MyButtonHTML from "@/bases/MyButtonHTML";
import { getUrlImage } from "@/utils/imageHandler";
import React, { useLayoutEffect, useState } from "react";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

export type TMyUploadImageSingleProps = {
  limit?: number;
  myUploadProps?: TMyUploadProps;
  value?: string;
  onChange?: (value: string) => void;
};

const MyUploadImageSingle: React.FC<TMyUploadImageSingleProps> = (props) => {
  const { myUploadProps = {}, value, onChange } = props;
  const [imageSrc, setImageSrc] = useState<string>(value || "");

  useLayoutEffect(() => {
    if (typeof onChange === "function") {
      onChange(imageSrc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageSrc]);

  useLayoutEffect(() => {
    setImageSrc(value || "");
  }, [value]);

  const onChangeUpload = async (file: Blob | File) => {
    try {
      const res = await filesService.imageUpload(file);
      setImageSrc(res?.data?.data || "");
      if (typeof onChange === "function") {
        onChange(res?.data?.data || "");
      }
    } catch (error: any) {
      myToast.error(error?.message?.[0]);
    }
  };

  const uploadButton = (
    <MyButtonHTML style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Chọn ảnh</div>
    </MyButtonHTML>
  );
  return (
    <>
      {!imageSrc && (
        <ImgCrop
          quality={1}
          showGrid
          minZoom={5}
          aspectSlider
          modalWidth={700}
          showReset
          aspect={3 / 4}
          rotationSlider
        >
          <MyUpload
            type="drag"
            listType="picture-card"
            showUploadList={false}
            customRequest={(event: any) => onChangeUpload(event.file)}
            {...myUploadProps}
          >
            {uploadButton}
          </MyUpload>
        </ImgCrop>
      )}
      {imageSrc && (
        <div className="rounded overflow-hidden relative p-1 bg-slate-200 flex justify-center items-center">
          <Image
            className="rounded-lg max-h-64 max-h-28"
            src={getUrlImage(imageSrc)}
          />
          <MyButtonHTML
            onClick={() => setImageSrc("")}
            className="absolute bg-gray-300 opacity-80 hover:scale-105 transition rounded-full p-3 right-3 top-3"
          >
            <LiaTimesSolid size={16} />
          </MyButtonHTML>
        </div>
      )}
    </>
  );
};

export default MyUploadImageSingle;
