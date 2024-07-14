import { useEffect } from "react";

const useSectionObserver = (
  sectionIds: string[],
  setActiveLink: (id: string) => void
) => {
  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id));
    const observerOptions: IntersectionObserverInit = {
      root: document.getElementById("main"),
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeId = entry.target.id;
          setActiveLink(activeId);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionIds, setActiveLink]);
};

export default useSectionObserver;
