import { FC, ReactNode, useState } from 'react';

interface IClock {
  color: string;
  time: ReactNode;
}

export const Clock: FC<IClock> = ({ color, time }: IClock) => {
  const [currentColor, setCurrentColor] = useState<string>(color);
  return <h1 style={{ color: currentColor }}>{time}</h1>;
};
