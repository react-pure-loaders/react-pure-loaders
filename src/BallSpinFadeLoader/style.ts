import { keyframes } from '@emotion/core';
import { balls, globalAnimation } from '../mixins';
import delay from '../utilities';
import { Grid } from '../types';

const radius = '25px';

const ballSpinFade = keyframes({
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
  },
  '50%': {
    opacity: 0.3,
    transform: 'scale(0.4)',

  },
});

function ballSpinFadeLoader() {
  const n = 8;
  let i = 1;
  const grid: Grid = {};
  for (; i < 9; i += 1) {
    const quarter = (parseInt(radius, 10) / 2) + (parseInt(radius, 10) / 5.5);

    if (i === 1) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpinFade} 1s ${delay('0.12s', n, i - 1)} infinite linear`,
        left: 0,
        top: radius,
      };
    } else if (i === 2) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpinFade} 1s ${delay('0.12s', n, i - 1)} infinite linear`,
        left: quarter,
        top: quarter,
      };
    } else if (i === 3) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpinFade} 1s ${delay('0.12s', n, i - 1)} infinite linear`,
        left: radius,
        top: 0,
      };
    } else if (i === 4) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpinFade} 1s ${delay('0.12s', n, i - 1)} infinite linear`,
        left: quarter,
        top: `-${quarter}px`,
      };
    } else if (i === 5) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpinFade} 1s ${delay('0.12s', n, i - 1)} infinite linear`,
        left: 0,
        top: `-${radius}`,
      };
    } else if (i === 6) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpinFade} 1s ${delay('0.12s', n, i - 1)} infinite linear`,
        left: `-${quarter}px`,
        top: `-${quarter}px`,
      };
    } else if (i === 7) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpinFade} 1s ${delay('0.12s', n, i - 1)} infinite linear`,
        left: `-${radius}`,
        top: 0,
      };
    } else if (i === 8) {
      grid[`> div:nth-of-type(${i})`] = {
        animation: `${ballSpinFade} 1s ${delay('0.12s', n, i - 1)} infinite linear`,
        left: `-${quarter}px`,
        top: quarter,
      };
    }
  }

  return grid;
}

export default (color?: string) => ({
  ...ballSpinFadeLoader(),
  left: '-10px',
  position: 'relative' as 'relative',
  top: '-10px',
  ' > div': {
    ...balls(color),
    ...globalAnimation(),
    position: 'absolute' as 'absolute',
  },
});
