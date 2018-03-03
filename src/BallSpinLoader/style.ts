import { css, keyframes } from 'glamor';
import { globalAnimation } from '../mixins';
import { PRIMARY_COLOR } from '../variables';

const radius = '45px';

const ballSpin = keyframes({
  '100%': {
    opacity: 1,
  },
  '75%': {
    opacity: 0.2,
  },
});

interface IGrid {
  [id: string]: object;
}

function ballSpinLoader() {
  let i = 1;
  const grid: IGrid = {};
  for (; i < 9; i += 1) {
    const quarter = (parseInt(radius, 10) / 2) + (parseInt(radius, 10) / 5.5);

    if (i === 1) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)} infinite linear`,
        left: 0,
        top: radius,
      };
    } else if (i === 2) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: quarter,
        top: quarter,
      };
    } else if (i === 3) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: radius,
        top: 0,
      };
    } else if (i === 4) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: quarter,
        top: `-${quarter}px`,
      };
    } else if (i === 5) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: 0,
        top: `-${radius}`,
      };
    } else if (i === 6) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: `-${quarter}px`,
        top: `-${quarter}px`,
      };
    } else if (i === 7) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: `-${radius}`,
        top: 0,
      };
    } else if (i === 8) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
        left: `-${quarter}px`,
        top: quarter,
      };
    }
  }

  return grid;
}

export default (color?: string) => css(
  ballSpinLoader(),
  {
    ' > div': globalAnimation(),
  },
  {
    position: 'relative',

    ' > div': {
      background: color ? color : PRIMARY_COLOR,
      borderRadius: '100%',
      height: '15px',
      position: 'absolute',
      width: '15px',
    },
  },
);
