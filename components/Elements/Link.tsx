import React, {
  AnchorHTMLAttributes,
  PropsWithChildren,
  FC,
  useMemo,
  DetailedHTMLProps,
} from "react";
import NextLink, { LinkProps } from "next/link";
import { useRouter } from "next/router";

export interface ILinkProps {
  external?: boolean;
  _blank?: boolean;
  href: string;
  className?: string;
  anchorProps?: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
  linkProps?: PropsWithChildren<LinkProps>;
}

const Link: FC<ILinkProps> = ({
  external,
  href,
  _blank,
  children,
  anchorProps,
  linkProps,
  className,
}) => {
  const props = { className, href };
  if (external) {
    return (
      <a {...props} target={_blank ? "_blank" : "_self"} {...anchorProps}>
        {children}
      </a>
    );
  } else {
    return (
      <NextLink href={href} {...linkProps} passHref>
        <a {...anchorProps} className={className}>
          {children}
        </a>
      </NextLink>
    );
  }
};

export const NavLink: FC<ILinkProps> = (props) => {
  const router = useRouter();

  const className = useMemo(() => {
    let val = "";
    if (props.className) val = props.className;
    if (router.pathname.startsWith(props.href)) val += " active";

    return val;
  }, [props.className, router.pathname]);

  return <Link {...props} className={className} />;
};

export default Link;
