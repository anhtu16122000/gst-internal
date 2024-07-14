import { Badge } from "antd";
import { BadgeProps } from "antd/lib";

type TMyBadge = {} & BadgeProps;

const MyBadge: React.FC<TMyBadge> = (props) => {
  return <Badge {...props} />;
};

export default MyBadge;
