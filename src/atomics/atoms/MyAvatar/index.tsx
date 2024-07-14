"use client";

import MyImage from "@/bases/MyImage";
import MyDefaultAvt from "../MyDefaultAvatar";

export type TMyAvatarProps = {
  lastName: string;
  id: string;
  src?: string;
  rounded?:
    | "rounded-none"
    | "rounded-sm"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-full";
  size?: keyof typeof SIZES;
};

const SIZES: Record<any, any> = {
  sm: {
    width: 25,
    height: 25,
    size: 15,
  },
  md: {
    width: 35,
    height: 35,
    size: 15,
  },
  lg: {
    width: 45,
    height: 45,
    size: 17,
  },
  xl: {
    width: 55,
    height: 55,
    size: 20,
  },
  "2xl": {
    width: 65,
    height: 65,
    size: 22,
  },
  "3xl": {
    width: 75,
    height: 75,
    size: 26,
  },
  "4xl": {
    width: 85,
    height: 85,
    size: 30,
  },
};

const MyAvatar: React.FC<TMyAvatarProps> = (props) => {
  const {
    lastName = "",
    id,
    size = "md",
    src,
    rounded = "rounded-full",
  } = props;
  return (
    <div>
      {src && (
        <MyImage
          suppressHydrationWarning
          viewDetail
          className={`overflow-hidden ${rounded}`}
          src={src}
          style={{
            objectFit: "cover",
          }}
          alt="ảnh đại diện"
          {...SIZES[size]}
        />
      )}
      {!src && (
        <MyDefaultAvt
          rounded={rounded}
          id={id}
          lastName={lastName}
          {...SIZES[size]}
        />
      )}
    </div>
  );
};

export default MyAvatar;
