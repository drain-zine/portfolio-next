import { useState, useEffect } from 'react';

export const useGetScrollY = () => {
        const [scrollY, setScrollY] = useState(0);


        useEffect(() => {
        const onScroll = e => {
            setScrollY(e.target.documentElement.scrollTop);
        };

        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [setScrollY]);

      return scrollY
}