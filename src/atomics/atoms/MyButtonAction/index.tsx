import { HTMLAttributes } from "react";

export type TMyButtonActionProps = {
  Icon: React.ReactNode;
  label: string;
} & HTMLAttributes<HTMLDivElement>;

const MyButtonAction: React.FC<TMyButtonActionProps> = (props) => {
  const { Icon, label, className = "", ...rest } = props;

  return (
    <div className={`flex items-center gap-1 ${className}`} {...rest}>
      {Icon}
      <span>{label}</span>
    </div>
  );
};

export default MyButtonAction;
