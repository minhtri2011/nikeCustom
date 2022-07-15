import { useEffect, useState } from "react";
// import { useScrollDirection } from "react-use-scroll-direction";

const useCheckScrollOverBottom = (ref: any) => {
  const [value, setValue] = useState<boolean>(false);
 
  const handleCheck = () => {
    
    if (ref.current) {
      const clientB = ref.current.getBoundingClientRect().top;
      // console.log(clientB);
      if (clientB < 0) {
        return setValue(true);
      } else return setValue(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleCheck);
    // return window.removeEventListener("scroll", handleCheck);
  }, []);
  return value;
};

export default useCheckScrollOverBottom;
