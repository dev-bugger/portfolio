import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => setMatches(e.matches);
    mediaMatch.addEventListener("change", handler);
    return () => mediaMatch.removeEventListener("change", handler);
  });

  return matches;
};

export default useMediaQuery;
