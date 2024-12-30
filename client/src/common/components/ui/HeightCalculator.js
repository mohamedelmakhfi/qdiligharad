import React, { useEffect, useState } from "react";

const HeightCalculator = ({ children }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.clientHeight;
        setHeight(containerHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const containerRef = React.useRef(null);

  return <div ref={containerRef}>{children(height)}</div>;
};

export default HeightCalculator;
