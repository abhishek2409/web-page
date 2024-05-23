import { useEffect, useState } from "react";

const useIntersectionObserver = (elementRef, options = {}) => {
  const { threshold = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { ...options, threshold }
    );

    const targetElement = elementRef.current;

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [elementRef, options, threshold]);

  return isVisible;
};

export default useIntersectionObserver;
