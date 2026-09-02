import { useEffect, useRef, useState } from "react";

const DEFAULT_OPTIONS = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" };

const useInView = (userOptions) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const optionsRef = useRef({ ...DEFAULT_OPTIONS, ...userOptions });

  useEffect(() => {
    optionsRef.current = { ...DEFAULT_OPTIONS, ...userOptions };
  }, [userOptions]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const { threshold, rootMargin } = optionsRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold, rootMargin });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

export default useInView;
