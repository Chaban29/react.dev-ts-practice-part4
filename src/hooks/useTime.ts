import { useState, useEffect } from 'react';
import { clearInterval } from 'timers';

interface ITime {
  currentTime: Date;
}

export const useTime = ({ currentTime }: ITime) => {
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return clearInterval(timeId);
  }, []);
  return time;
};
