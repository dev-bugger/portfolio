import { useMemo } from "react";
import useScrollTracker from "./useScrollTracker";

function useScrollHideHeader(headerRef: React.RefObject<HTMLElement>) {
  const { y: scrollY } = useScrollTracker();

  const isHeaderHidden = useMemo(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;

      return scrollY > headerHeight;
    }
  }, [headerRef, scrollY]);

  return isHeaderHidden;
}

export default useScrollHideHeader;
