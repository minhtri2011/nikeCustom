import React, { useLayoutEffect } from 'react'

type Props = {}

const useLockBodyScroll = (props: Props) => {
    useLayoutEffect(() : () => void => {
        // Get original body overflow
        const originalStyle: string = window.getComputedStyle(document.body).overflow;
        // Prevent scrolling on mount
        document.body.style.overflow = "hidden";
        // Re-enable scrolling when component unmounts
        return () => (document.body.style.overflow = originalStyle);
      }, []); 
}

export default useLockBodyScroll