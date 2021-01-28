import styles from "./app.module.css";
import Tabs from "./components/Tabs";
import mock from "./mock.json";

function App() {
  const tabs = [
    {
      id: 1,
      active: true,
      className: styles.tab__nav,
      title: "header title 1",
      content: mock.tabs.content1,
    },
    {
      id: 2,
      active: false,
      className: styles.tab__nav,
      title: "header title 2",
      content: mock.tabs.content2,
    },
  ];

  return (
    <div className={styles.app__content}>
      <h2>TABS COMPONENT</h2>
      <Tabs tabsClassName={styles.tab__container} tabs={tabs} />
    </div>
  );
}

export default App;
