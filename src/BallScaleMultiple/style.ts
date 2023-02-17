import { keyframes } from '@emotion/react';
import { balls, globalAnimation } from '../mixins';
import delay from '../utilities';
import { Grid } from '../types';

const size = '60px';

const ballScaleMultiple = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0.0)',
  },
  '100%': {
    opacity: 0,
    transform: 'scale(1.0)',
  },
  '5%': {
    opacity: 1,
  },
});

export function ballScale() {
  const n = 3;
  let i = 2;
  const grid: Grid = {};
  for (; i < 4; i += 1) {
    grid[`> div:nth-of-type(${i})`] = {
      animationDelay: delay('0.2s', n, i),
    };
  }

  return grid;
}

export default (color?: string) => ({
  ...ballScale(),
  position: 'relative' as 'relative',
  transform: `translateY(-${size} / 2)`,
  ' > div': {
    ...balls(color),
    ...globalAnimation(),
    animation: `${ballScaleMultiple} 1s 0s linear infinite`,
    height: size,
    left: '-30px',
    margin: '0',
    opacity: 0,
    position: 'absolute' as 'absolute',
    top: '0px',
    width: size,
  },
});
