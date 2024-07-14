import MyButtonHTML from "@/bases/MyButtonHTML";

import MyPopover, { TMyPopoverProps } from "@/bases/MyPopover";
import React, {
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useState,
} from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export type TMyPopoverThreeDotProps = {
  content: ({
    setOpen,
  }: {
    setOpen: Dispatch<SetStateAction<boolean>>;
  }) => React.ReactElement;
  myPopoverProps?: Omit<TMyPopoverProps, "children">;
  iconSize?: number;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

const MyPopoverThreeDot: React.FC<TMyPopoverThreeDotProps> = (props) => {
  const { content, myPopoverProps, iconSize = 20, className = "" } = props;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <MyPopover
      open={open}
      afterOpenChange={(vi) => {
        console.log("vi", vi);
      }}
      content={() => <div>{content({ setOpen })}</div>}
      placement="rightBottom"
      {...myPopoverProps}
    >
      <MyButtonHTML
        onClick={() => setOpen(true)}
        className={`w-fit p-0.5 absolute top-1 right-1  rounded-full group-hover:bg-slate-100 ${className}`}
      >
        <BsThreeDotsVertical size={iconSize} />
      </MyButtonHTML>
    </MyPopover>
  );
};

export default MyPopoverThreeDot;
