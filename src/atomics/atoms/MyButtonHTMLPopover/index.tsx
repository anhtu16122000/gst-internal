import MyButtonHTML, { TMyButtonHTMLProps } from "@/bases/MyButtonHTML";

export type TMyButtonHTMLPopoverProps = {
  Icon: React.ReactNode;
  children: React.ReactNode;
} & TMyButtonHTMLProps;

const MyButtonHTMLPopover: React.FC<TMyButtonHTMLPopoverProps> = (props) => {
  const { className = "", children, Icon, ...rest } = props;

  return (
    <MyButtonHTML
      className={`flex items-center w-full p-2 hover:bg-slate-100 cursor-pointer rounded-lg gap-1 ${className}`}
      {...rest}
    >
      {Icon} {children}
    </MyButtonHTML>
  );
};

export default MyButtonHTMLPopover;
