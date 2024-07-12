import React from "react";
import { Nav, NavLinkProps } from "react-bootstrap";

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  to,
  onClick,
  ...props
}) => {
  const href = React.useMemo(
    () => (to ? `#${to}` : props.href),
    [to, props.href]
  );

  const handleClick: React.MouseEventHandler<HTMLElement> = React.useCallback(
    (event) => {
      if (href) {
        event.preventDefault();
        event.stopPropagation();

        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      onClick?.(event, to);
    },
    [href, onClick, to]
  );

  return <Nav.Link {...props} href={href} onClick={handleClick} />;
};

type SmoothScrollLinkProps = Omit<NavLinkProps, "onClick"> & {
  to: string;
  onClick: (event: any, linkTo: string) => void;
};

export default SmoothScrollLink;
