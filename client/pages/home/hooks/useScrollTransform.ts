'use client';

import { useEffect, useRef, useState } from 'react';

function useScrollTransform() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [elementMove, setElementMove] = useState<number>(-80);
  const lastScrollPos = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;

      if (element) {
        const elementTopPos = element.getBoundingClientRect().top;

        if (elementTopPos < 500 && elementTopPos > -250) {
          const activeScrollPos = window.scrollY;
          if (lastScrollPos.current < activeScrollPos) {
            setElementMove((prevMove) => prevMove + 1);
          } else {
            setElementMove((prevMove) => prevMove - 1);
          }

          lastScrollPos.current = activeScrollPos;
          element.style.transform = `translateX(${elementMove}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementMove]);

  return elementRef;
};

export default useScrollTransform;
