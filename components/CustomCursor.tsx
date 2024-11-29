import React, { useState, useEffect } from 'react';

// Type declaration for Position
interface Position {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(false); // Visibility toggle for cursor

  const cursorSize = 200; // Cursor size
  const halfSize = cursorSize / 2;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Show cursor only on medium (>=768px) and large screens
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check screen size initially
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let requestId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return; // Ignore mouse movements on small screens

      if (requestId) cancelAnimationFrame(requestId);

      requestId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestId) cancelAnimationFrame(requestId);
    };
  }, [isVisible]);

  if (!isVisible) return null; // Don't render cursor on small screens

  return (
    <div
      className="fixed pointer-events-none rounded-full z-[-1] hidden md:block"
      style={{
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        marginLeft: `-${halfSize}px`,
        marginTop: `-${halfSize}px`,
        top: position.y,
        left: position.x,
        background:
          'radial-gradient(circle, rgb(204, 51, 204) 30%, rgba(204, 51, 204, 0.3) 60%, rgba(0,0,0,0) 60%)',
        filter: 'blur(110px)', // Adjust blur as needed
      }}
    />
  );
};

export default CustomCursor;
