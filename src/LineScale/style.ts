import { keyframes } from '@emotion/core';
import { globalAnimation, lines } from '../mixins';
import delay from '../utilities';
import { Grid } from '../types';

const ballBeat = keyframes({
  '0%': {
    transform: 'scaley(1.0)',
  },
  '100%': {
    transform: 'scaley(1.0)',
  },
  '50%': {
    transform: 'scaley(0.4)',
  },
});

function lineScale() {
  const n = 5;
  let i = 1;
  const grid: Grid = {};
  for (; i < 10; i += 1) {
    grid[`> div:nth-of-type(${i})`] = {
      animation: `${ballBeat} 1s ${delay('0.1s', n, i)} infinite cubic-bezier(.2,.68,.18,1.08)`,
    };
  }

  return grid;
}

export default (color?: string) => ({
  ...lineScale(),
  ' > div': {
    ...lines(color),
    ...globalAnimation(),
    display: 'inline-block',
  },
});
