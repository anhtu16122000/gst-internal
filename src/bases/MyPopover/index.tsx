import { Popover, PopoverProps } from "antd";
import { TooltipRef } from "antd/es/tooltip";
import { ForwardRefRenderFunction, forwardRef } from "react";

export type TMyPopoverProps = {} & PopoverProps;

const MyPopover: ForwardRefRenderFunction<TooltipRef, TMyPopoverProps> = (
  { children, ...rest },
  ref,
) => {
  return (
    <Popover {...rest} ref={ref}>
      {children}
    </Popover>
  );
};

export default forwardRef(MyPopover);
