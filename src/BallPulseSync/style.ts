import { keyframes } from '@emotion/react';
import { balls, globalAnimation } from '../mixins';
import delay from '../utilities';

const amount = '10px';

const ballPulseSync = keyframes({
  '100%': {
    transform: 'translateY(0)',
  },
  '33%': {
    transform: `translateY(${amount})`,
  },
  '66%': {
    transform: `translateY(-${amount})`,
  },
});

interface Pulse {
    [id: string]: object;
}

export function ballPulse() {
  const n = 3;
  let i = 1;
  const grid: Pulse = {};
  for (; i < 4; i += 1) {
    grid[`> div:nth-of-type(${i})`] = {
      animation: `${ballPulseSync} 0.6s ${delay('0.07s', n, i)} infinite ease-in-out`,
    };
  }

  return grid;
}

export default (color?: string) => ({
  ...ballPulse(),
  ' > div': {
    ...balls(color),
    ...globalAnimation(),
    display: 'inline-block',
  },
});
