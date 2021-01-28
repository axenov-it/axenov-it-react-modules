import { Children } from "react";

interface Props {
  children: any;
  className: string;
}

const TabContent = ({ children, className }: Props) => (
  <div className={className}>{children}</div>
);

export default TabContent;
