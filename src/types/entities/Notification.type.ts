import { MyEntity } from "../common.type";
import { NOTIFICATION_STATUS } from "../enum";

type NotificationEntity = MyEntity<{
  title: string;
  description: string;
  status: NOTIFICATION_STATUS;
}>;

export default NotificationEntity;
