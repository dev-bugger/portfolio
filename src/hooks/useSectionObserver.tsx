import { useEffect } from "react";

const useSectionObserver = (
  sectionIds: string[],
  setActiveLink: (id: string) => void
) => {
  useEffect(() => {
    if (window.innerWidth < 768) {
      return;
    }
    const sections = sectionIds.map((id) => document.getElementById(id));
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -20% 0px",
      //   rootMargin: "0px 0px -80% 0px", // Adjusting to recognize 20% in view
      threshold: 0.2, // 50% threshold
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
