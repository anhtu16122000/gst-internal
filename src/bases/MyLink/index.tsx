import Link, { LinkProps } from "next/link";

type TMyLinkProps = {
  href: string;
  disable?: boolean;
  DisplayComponent: React.ReactNode;
} & Omit<LinkProps, "href">;

const MyLink: React.FC<TMyLinkProps> = (props) => {
  const { href, DisplayComponent, disable = false, ...rest } = props;

  if (disable) {
    return <>{DisplayComponent}</>;
  }
  return (
    <Link href={href} {...rest}>
      {DisplayComponent}
    </Link>
  );
};
export default MyLink;
