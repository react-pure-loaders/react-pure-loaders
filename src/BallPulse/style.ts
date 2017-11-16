import { css, keyframes } from 'glamor';
import { balls, globalAnimation } from '../mixins';
import { delay } from '../utilities';

const scale = keyframes({
  '0%': {
    opacity: '1',
    transform: 'scale(1)',
  },
  '45%': {
    opacity: '0.7',
    transform: 'scale(0.1)',
  },
  '80%': {
    opacity: '1',
    transform: 'scale(1)',
  },
});

interface IPulse {
  [id: string]: object;
}

export function ballPulse() {
  const n = 3;
  let i = 1;
  const grid: IPulse = {};
  for (; i < 4; i += 1) {
    grid[`> div:nth-child(${i})`] = {
      animation: `${scale} 0.75s ${delay('0.12s', n, i)} infinite cubic-bezier(.2,.68,.18,1.08)`,
    };
  }

  return grid;
}

export default css(
  ballPulse(),
  {
    ' > div': balls(),
  },
  {
    ' > div': globalAnimation(),
  },
  {
    ' > div': {
      display: 'inline-block',
    },
  },
);
