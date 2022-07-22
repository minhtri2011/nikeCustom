import { useEffect } from "react";
import { useState } from "react";
import React from "react";

const useCheckBreakpoints = () => {
  const [value, setValue] = useState<string>();
  const setBreakpoints = () => {
    const screenWidth = window.innerWidth;

    switch (true) {
      case screenWidth >= 0 && screenWidth <= 600:
        setValue("sm");
        break;
      case screenWidth > 600 && screenWidth <= 950:
        setValue("md");
        break;
      case screenWidth > 950 && screenWidth <= 1200:
        setValue("lg");
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    setBreakpoints()
    window.addEventListener("resize", setBreakpoints);
    return () => {
      window.removeEventListener('resize', setBreakpoints)
  }
  }, []);
  return value;
};

export default useCheckBreakpoints;
