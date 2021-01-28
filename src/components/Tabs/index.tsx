import { useState } from "react";
import { first } from "./helpers";
import TabNav from "./components/TabNav";
import TabContent from "./components/TabContent";
import classNames from "classnames";
import styles from "./styles.module.css";

interface Props {
  tabs: ReadonlyArray<{
    id: number;
    active?: boolean;
    ssr?: boolean;
    className?: string;
    title: any;
    content: any;
  }>;
  tabsClassName?: string;
  tabsHeaderClassName?: string;
  tabsContentClassName?: string;
  tabsActiveNavClassName?: string;
}

const TabContainer = ({
  tabs,
  tabsClassName,
  tabsHeaderClassName,
  tabsContentClassName,
  tabsActiveNavClassName,
}: Props) => {
  const [data, setData] = useState(tabs);

  const onTabClick = (id: number) => {
    setData(data.map((t) => ({ ...t, active: t.id === id })));
  };

  const activeNavClassName = tabsActiveNavClassName || styles.tabs__activeNav;

  return (
    <div className={classNames(styles.tabs, tabsClassName)}>
      <div className={classNames(styles.tabs__header, tabsHeaderClassName)}>
        {data.map((tab) => (
          <TabNav
            id={tab.id}
            onClick={onTabClick}
            key={tab.id}
            className={classNames(styles.tabs__nav, tab.className, {
              [activeNavClassName]: tab.active,
            })}
          >
            {tab.title}
          </TabNav>
        ))}
      </div>

      {data.map((tab) => (
        <TabContent
          key={tab.id}
          ssr={tab.ssr}
          active={tab.active}
          className={classNames(styles.tabs__content, tabsContentClassName)}
        >
          {tab.content}
        </TabContent>
      ))}
    </div>
  );
};

export default TabContainer;
