import React, { useState, useEffect } from 'react';

// Type declaration for Position
interface Position {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const cursorSize = 200; // Cursor size
  const halfSize = cursorSize / 2;

  useEffect(() => {
    let requestId: number;

    const handleMouseMove = (e: MouseEvent) => {
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
  }, []);

  const commonStyles = {
    position: 'fixed' as const,
    width: `${cursorSize}px`,
    height: `${cursorSize}px`,
    marginLeft: `-${halfSize}px`,
    marginTop: `-${halfSize}px`,
    pointerEvents: 'none' as const,
    borderRadius: '50%',
    zIndex: -1, // Ensure it stays behind content at all times
    background:
      'radial-gradient(circle, rgb(204, 51, 204) 30%, rgba(204, 51, 204, 0.3) 60%, rgba(0,0,0,0) 60%)',
    filter: 'blur(110px)', // Adjust blur as needed
  };

  return (
    <div
      style={{
        ...commonStyles,
        top: position.y,
        left: position.x,
      }}
    />
  );
};

export default CustomCursor;
