import React, { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface TrailItem extends Position {
  opacity: number;
  fadeIn: boolean;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [trail, setTrail] = useState<TrailItem[]>([]);

  const cursorSize = 200;
  const halfSize = cursorSize / 2;

  useEffect(() => {
    let requestId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (requestId) cancelAnimationFrame(requestId);

      requestId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setTrail((prevTrail) => [
          ...prevTrail,
          { x: e.clientX, y: e.clientY, opacity: 0, fadeIn: true },
        ]);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestId) cancelAnimationFrame(requestId);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prevTrail) =>
        prevTrail
          .map((item) => ({
            ...item,
            opacity: item.fadeIn
              ? Math.min(item.opacity + 0.05, 1)
              : item.opacity - 0.05,
            fadeIn: item.fadeIn && item.opacity < 1,
          }))
          .filter((item) => item.opacity > 0)
      );
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const commonStyles = {
    position: 'fixed' as const,
    width: `${cursorSize}px`,
    height: `${cursorSize}px`,
    marginLeft: `-${halfSize}px`,
    marginTop: `-${halfSize}px`,
    pointerEvents: 'none' as const,
    borderRadius: '50%',
    zIndex: 0, // Set base z-index to 0
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 1, // Container z-index
      }}
    >
      {/* Main Cursor */}
      <div
        style={{
          ...commonStyles,
          top: position.y,
          left: position.x,
          background:
            'radial-gradient(circle, rgba(95, 15, 100, 1) 0%, rgba(95, 15, 100, 0.3) 40%, rgba(0, 0, 0, 0) 60%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Cursor Trail */}
      {trail.map((item, index) => (
        <div
          key={index}
          style={{
            ...commonStyles,
            top: item.y,
            left: item.x,
            background:
              'radial-gradient(circle, rgba(95, 15, 100, 0.6) 0%, rgba(95, 15, 100, 0.2) 40%, rgba(0, 0, 0, 0) 70%)',
            filter: 'blur(10px)',
            opacity: item.opacity,
            transition: 'opacity 0.05s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;