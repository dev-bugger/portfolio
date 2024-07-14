import { useEffect, useState } from "react";

function useScrollTracker() {
  const [scrollPosition, setScrollPosition] = useState({ y: 0 });

  useEffect(() => {
    const element = document.getElementById("view");
    const handleScroll = () => {
      if (element) {
        setScrollPosition({
          y: element.scrollTop,
        });
      }
    };

    // Attach the scroll event listener
    element?.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      element?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

export default useScrollTracker;
