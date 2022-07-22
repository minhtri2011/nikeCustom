import { useEffect, useState } from "react";
// import { useScrollDirection } from "react-use-scroll-direction";

const useCheckElementAtBottomScreen = (ref: any) => {
  const [value, setValue] = useState<boolean>(false);

  const handleCheck = () => {
    if (ref.current) {
      const bounding = ref.current.getBoundingClientRect();
      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        return setValue(true);
      } else {
        return setValue(false);
      }
    }
  };
  useEffect(() => {
    handleCheck();
    window.addEventListener("scroll", handleCheck);
    // return window.removeEventListener("scroll", handleCheck);
    return () => {
      window.removeEventListener("scroll", handleCheck);
    };
  }, []);
  return value;
};

export default useCheckElementAtBottomScreen;
