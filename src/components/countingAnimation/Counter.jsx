import { useState, useEffect, useRef } from 'react';

const Counter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);
  const countingRef = useRef(null);

  useEffect(() => {
    const countingElement = countingRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let startTimestamp;

            const animateCount = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = timestamp - startTimestamp;

              if (progress < duration) {
                const percentage = Math.min(1, progress / duration);
                const newCount = Math.floor(percentage * endValue);
                setCount(newCount);
                requestAnimationFrame(animateCount);
              } else {
                setCount(endValue);
              }
            };

            requestAnimationFrame(animateCount);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(countingElement);

    return () => observer.disconnect();
  }, [endValue, duration]);

  return <span ref={countingRef}>{count}</span>;
};

export default Counter;