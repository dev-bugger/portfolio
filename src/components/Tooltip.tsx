import { OverlayTrigger, Tooltip as BTooltip } from "react-bootstrap";

const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
  return (
    <OverlayTrigger overlay={<BTooltip placement="top">{title}</BTooltip>}>
      <span>{children}</span>
    </OverlayTrigger>
  );
};

type TooltipProps = {
  title: string;
  children: React.ReactNode;
};

export default Tooltip;
