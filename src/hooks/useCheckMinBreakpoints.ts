import { useEffect, useState } from "react";

const useCheckMinBreakpoints = (breakpoint: number) => {
  const [value, setValue] = useState<boolean>();

  const setBreakpoints = () => {
    const screenWidth = window.innerWidth;
    screenWidth < breakpoint ? setValue(true) : setValue(false);
  };
  useEffect(() => {
    window.addEventListener("resize", setBreakpoints);
  }, []);
  return value;
};

export default useCheckMinBreakpoints;
