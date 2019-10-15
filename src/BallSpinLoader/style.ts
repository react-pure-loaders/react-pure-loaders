import { keyframes } from '@emotion/core';
import { globalAnimation } from '../mixins';
import { PRIMARY_COLOR } from '../variables';
import { Grid } from '../types';

const radius = '45px';

const ballSpin = keyframes({
  '100%': {
    opacity: 1,
  },
  '75%': {
    opacity: 0.2,
  },
});

function ballSpinLoader() {
  let i = 1;
  const grid: Grid = {};
  for (; i < 9; i += 1) {
    const quarter = (parseInt(radius, 10) / 2) + (parseInt(radius, 10) / 5.5);

    if (i === 1) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)} infinite linear`,
        left: 0,
        top: radius,
      };
    } else if (i === 2) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: quarter,
        top: quarter,
      };
    } else if (i === 3) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: radius,
        top: 0,
      };
    } else if (i === 4) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: quarter,
        top: `-${quarter}px`,
      };
    } else if (i === 5) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: 0,
        top: `-${radius}`,
      };
    } else if (i === 6) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: `-${quarter}px`,
        top: `-${quarter}px`,
      };
    } else if (i === 7) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: `-${radius}`,
        top: 0,
      };
    } else if (i === 8) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: `-${quarter}px`,
        top: quarter,
      };
    }
  }

  return grid;
}

export default (color?: string) => ({
  ...ballSpinLoader(),
  position: 'relative' as 'relative',
  ' > div': {
    ...globalAnimation(),
    background: color || PRIMARY_COLOR,
    borderRadius: '100%',
    height: '15px',
    position: 'absolute' as 'absolute',
    width: '15px',
  },
});
