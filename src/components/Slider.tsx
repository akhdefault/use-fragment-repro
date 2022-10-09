import cn from "classnames";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useRef } from "react";
import css from "./Slider.module.scss";

const Slider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: ref,
  });

  const goPrev = () => {
    // ref.current.scrollLeft -= 400;
    console.log("prev");
  };

  const goNext = () => {
    // ref.current.scrollLeft += 400;
    console.log("next");
  };

  // useLayoutEffect(() => {
  //   ref.current.scrollLeft = 400;
  // }, []);

  return (
    <>
      <h1 className={css.title}>
        Click on the slider and use arrows to move left/right
      </h1>
      <div className={css.root} ref={ref}>
        <div className={cn(css.item, css.red)}></div>
        <div className={cn(css.item, css.green)}></div>
        <div className={cn(css.item, css.blue)}></div>
        <div className={cn(css.item, css.cyan)}></div>
        <div className={cn(css.item, css.magenta)}></div>
        <div className={cn(css.item, css.yellow)}></div>
        <div className={cn(css.item, css.black)}></div>
      </div>
      <Controls
        scrollXProgress={scrollXProgress}
        goPrev={goPrev}
        goNext={goNext}
      />
    </>
  );
};

type ControlsProps = {
  goPrev: () => void;
  goNext: () => void;
  scrollXProgress: MotionValue;
};

const Controls = ({ goPrev, goNext, scrollXProgress }: ControlsProps) => {
  const prevOpacity = useTransform(scrollXProgress, [0, 0.99, 1], [0, 1, 1]);
  const nextOpacity = useTransform(scrollXProgress, [0, 0.99, 1], [1, 1, 0]);

  return (
    <div className={css.controls}>
      <motion.div
        className={css.prevControl}
        onClick={goPrev}
        style={{
          opacity: prevOpacity,
        }}
      >
        Prev
      </motion.div>
      <motion.div
        className={css.nextControl}
        onClick={goNext}
        style={{
          opacity: nextOpacity,
        }}
      >
        Next
      </motion.div>
    </div>
  );
};

export default Slider;
