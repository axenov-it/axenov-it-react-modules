import styles from "./styles.module.css";

type ParamsInterface = {
  banners: ReadonlyArray<unknown>;
  activeIndex: number;
  onClickNav: (index: number) => void;
};

const Nav = ({ banners, activeIndex, onClickNav }: ParamsInterface) => {
  return (
    <ul className={styles.nav}>
      {banners.map((banner: any, index) => {
        const className =
          index === activeIndex ? styles.nav__active : styles.nav__item;

        return (
          <li
            onClick={() => onClickNav(index)}
            key={banner.id}
            className={className}
          ></li>
        );
      })}
    </ul>
  );
};

export default Nav;
