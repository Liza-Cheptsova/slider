import { useEffect, useState } from "react";
import s from "../App.module.css";
import { SliderData } from "./../sliderData/SliderData";

export const Slider = ({ slides }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current: number) => {
        const res = current === length - 1 ? 0 : activeIndex + 1;
        return res;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, length]);

  const nextSlideHandlet = () => {
    setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1);
  };
  const prevSlideHandlet = () => {
    setActiveIndex(activeIndex === 0 ? length - 1 : activeIndex - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <div className={s.slider}>
      <button className={s.prev_btn} onClick={prevSlideHandlet}>
        &#11144;
      </button>
      {SliderData.map((slide, index) => (
        <div className={index === activeIndex ? s.slide + " " + s.active : s.slide} key={index}>
          {index === activeIndex && <img src={slide.image} className={s.actve_img} alt="woods" />}
        </div>
      ))}
      <button className={s.next_btn} onClick={nextSlideHandlet}>
        &#11146;
      </button>
    </div>
  );
};
