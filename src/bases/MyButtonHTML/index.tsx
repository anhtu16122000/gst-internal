import { ForwardRefRenderFunction, forwardRef } from "react";

export type TMyButtonHTMLProps = {} & JSX.IntrinsicElements["button"];

const MyButtonHTML: ForwardRefRenderFunction<
  HTMLButtonElement,
  TMyButtonHTMLProps
> = (props, ref) => {
  return <button ref={ref} {...props} />;
};

export default forwardRef(MyButtonHTML);
