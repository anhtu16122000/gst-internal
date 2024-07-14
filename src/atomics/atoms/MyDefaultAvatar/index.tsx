import { generateColor } from "@/utils/colorHandler";
import { uuidToNumber } from "@/utils/common";
import { TMyAvatarProps } from "../MyAvatar";

type TMyDefaultAvt = {
  lastName: string;
  rounded?: TMyAvatarProps["rounded"];
  id: string;
  width?: number;
  height?: number;
  size?: number;
};

const MyDefaultAvt: React.FC<TMyDefaultAvt> = (props) => {
  const {
    lastName = "",
    id,
    width = 35,
    height = 35,
    size = 15,
    rounded = "rounded-full",
  } = props;
  const splitName = lastName.split(" ");
  const numberId = uuidToNumber(id);

  return (
    <div
      className={`flex items-center justify-center  text-[#ffff] font-[bold] ${rounded}`}
      style={{
        backgroundColor: generateColor(numberId),
        height: height,
        width: width,
        fontSize: size,
      }}
    >
      {splitName[splitName.length - 1].charAt(0).toUpperCase()}
    </div>
  );
};

export default MyDefaultAvt;
