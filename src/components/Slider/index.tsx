/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./styles.module.css";
import Active from "./components/Active";
import Nav from "./components/Nav";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

type ParamsInterface = {
  banners: ReadonlyArray<{
    imageUrl: string;
    id: number;
  }>;
  imgBaseUrl: string;
  autoPlay?: boolean;
  autoPlayTime?: number;
};

const Slider = ({
  banners,
  imgBaseUrl,
  autoPlay,
  autoPlayTime = 2000,
}: ParamsInterface) => {
  const countBanners = banners.length;
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(banners[index]);
  const [isChange, setIsChange] = useState(false);
  const [isPlay, setIsPlay] = useState(autoPlay);

  const setActiveSlide = (index: number) => {
    setIsChange(false);

    setTimeout(() => {
      setIsChange(true);

      setIndex(index);
      setActive(banners[index]);
    }, 500);
  };

  const leftBtnOnClick = () => {
    const newIndex = index - 1;

    if (newIndex < 0) {
      setActiveSlide(countBanners - 1);
    } else {
      setActiveSlide(newIndex);
    }
  };

  const rightBtnOnClick = () => {
    const newIndex = index + 1;

    if (newIndex === countBanners) {
      setActiveSlide(0);
    } else {
      setActiveSlide(newIndex);
    }
  };

  const play = (index: number) => {
    if (index === countBanners) {
      setActiveSlide(0);
    } else {
      setActiveSlide(index);
    }
  };

  const onClickNav = (index: number) => {
    setActiveSlide(index);
  };

  const onHover = () => {
    if (autoPlay) {
      setIsPlay(!isPlay);
    }
  };

  useEffect(() => {
    if (isPlay) {
      const interval = setInterval(() => {
        setIndex((index) => index + 1);
      }, autoPlayTime);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isPlay]);

  useEffect(() => play(index), [index]);

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      className={styles.slider}
    >
      <div className={styles.slider__block}>
        <FaAngleLeft
          onClick={leftBtnOnClick}
          className={styles.slider__btnLeft}
        />

        <Active isChange={isChange} src={`${imgBaseUrl}${active.imageUrl}`} />

        <FaAngleRight
          onClick={rightBtnOnClick}
          className={styles.slider__btnRight}
        />
      </div>
      <div className={styles.slider__nav}>
        <Nav onClickNav={onClickNav} activeIndex={index} banners={banners} />
      </div>
    </div>
  );
};

export default Slider;
