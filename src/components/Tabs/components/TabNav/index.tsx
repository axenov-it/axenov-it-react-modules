interface Props {
  id: number;
  children: any;
  className?: any;
  onClick: (id: number, e: any) => void;
}

const TabNav = ({ children, className, onClick, id }: Props) => (
  <div onClick={(e) => onClick(id, e)} className={className}>
    {children}
  </div>
);

export default TabNav;
