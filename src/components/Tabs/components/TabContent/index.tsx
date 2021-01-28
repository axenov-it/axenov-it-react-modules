import classNames from "classnames";
import styles from "../../styles.module.css";

interface Props {
  children: any;
  className: string;
  ssr?: boolean;
  active?: boolean;
}

const TabContent = ({ children, className, ssr, active }: Props) => {
  const isRender = ssr || active;

  if (isRender) {
    return (
      <div
        className={classNames(className, {
          [styles.tabs__ssrHide]: ssr && !active,
          [styles.tabs__ssrShow]: ssr && active,
        })}
      >
        {children}
      </div>
    );
  }
  return null;
};

export default TabContent;
