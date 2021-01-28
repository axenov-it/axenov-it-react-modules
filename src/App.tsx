import styles from "./app.module.css";
import Tabs from "./components/Tabs";
import Slider from "./components/Slider";
import mock from "./mock.json";

function App() {
  return (
    <div className={styles.app__content}>
      <h2>TABS COMPONENT</h2>
      <Tabs
        tabsClassName={styles.tab__container}
        tabs={[
          {
            id: 1,
            active: true,
            ssr: true,
            className: styles.tab__nav,
            title: "header title 1",
            content: mock.tabs.content1,
          },
          {
            id: 2,
            active: false,
            ssr: false,
            className: styles.tab__nav,
            title: "header title 2",
            content: mock.tabs.content2,
          },
        ]}
      />
      <h2>SLIDER COMPONENT</h2>
      <Slider
        banners={[
          { id: 1, imageUrl: "slide1_1920x1200.jpg" },
          { id: 2, imageUrl: "slide2_1920x1200.jpg" },
          { id: 3, imageUrl: "slide3_1920x1200.jpg" },
          { id: 4, imageUrl: "slide4_1920x1200.jpg" },
          { id: 5, imageUrl: "slide5_1920x1200.jpg" },
        ]}
        imgBaseUrl="/"
        autoPlay={true}
        autoPlayTime={5000}
      />
    </div>
  );
}

export default App;
