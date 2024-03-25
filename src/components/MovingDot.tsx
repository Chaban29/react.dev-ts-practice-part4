import { FC, useState, PointerEvent } from 'react';

interface IPosition {
  x: number;
  y: number;
}

export const MovingDot: FC = () => {
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });

  const handleMovingDot = (event: PointerEvent<HTMLDivElement>) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onPointerMove={handleMovingDot}
      style={{ position: 'relative', width: '100vw', height: '100vh' }}
    >
      <div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          background: 'red',
          left: -25,
          top: -25,
          width: 20,
          height: 20,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  );
};
