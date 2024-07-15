import React, { memo } from "react";

import useScrollHideNavigation from "hooks/useScrollHideHeader";
import useSectionObserver from "hooks/useSectionObserver";
import { sectionIds } from "utils/config";
import NavBar from "./NavBar";
import NavWidget from "./NavWidget";

import "styles/components/header.css";

const Navigation = () => {
  const navRef = React.useRef<HTMLElement>(null);

  const isNavigationHidden = useScrollHideNavigation(navRef);

  const [, startTransition] = React.useTransition();
  const [activeLink, setActiveLink] = React.useState<string>("");

  const handleActiveLinkChange = React.useCallback((linkId: string) => {
    startTransition(() => {
      setActiveLink(linkId);
    });
  }, []);

  useSectionObserver(sectionIds, handleActiveLinkChange);

  const handleLinkClick = React.useCallback(
    (_e: any, linkId: string) => {
      handleActiveLinkChange(linkId);
    },
    [handleActiveLinkChange]
  );

  return (
    <>
      <NavBar
        navRef={navRef}
        activeLink={activeLink}
        hidden={isNavigationHidden}
        onLinkClick={handleLinkClick}
      />
      <NavWidget
        activeLink={activeLink}
        hidden={!isNavigationHidden}
        onLinkClick={handleLinkClick}
      />
    </>
  );
};

export default memo(Navigation);
