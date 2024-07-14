import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperProps } from "swiper/react";

type TMySwiperProps = {} & SwiperProps;

const MySwiper: React.FC<TMySwiperProps> = (props) => {
  const { children, ...rest } = props;
  return <Swiper {...rest}>{children}</Swiper>;
};

export default MySwiper;
