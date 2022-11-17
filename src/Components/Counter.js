import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { StyledHeading } from "./CurrentWeather/HeroElements";

function Counter({ temp }) {
  const ref = useRef();

  useEffect(() => {
    if (temp !== undefined) {
      const controls = animate(0, temp, {
        duration: 1,
        onUpdate(value) {
          ref.current.textContent = value.toFixed(0);
        },
      });
      return () => controls.stop();
    }
  }, [temp]);

  return <StyledHeading ref={ref}></StyledHeading>;
}

export default Counter;
