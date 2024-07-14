import { memo, useMemo } from "react";

import useCursorTracker from "hooks/useCursorTracker";
import "styles/components/cursor.css";

const CursorTracker = () => {
  const position = useCursorTracker();

  const background = useMemo(() => {
    if (position.x || position.y) {
      return `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    }

    return "radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)";
  }, [position.x, position.y]);

  return (
    <div
      className="cursor"
      style={{
        background,
      }}
    ></div>
  );
};

export default memo(CursorTracker);
