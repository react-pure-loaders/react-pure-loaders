import { css, keyframes } from 'glamor';
import { globalAnimation, lines } from '../mixins';
import { delay } from '../utilities';

const radius = '20px';

const lineSpinFade = keyframes({
  '100%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.3,
  },
});

interface IGrid {
  [id: string]: object;
}

function lineSpinFadeLoader() {
  const n = 8;
  let i = 1;
  const grid: IGrid = {};
  for (; i < 9; i += 1) {
    const quarter = (parseInt(radius, 10) / 2) + (parseInt(radius, 10) / 5.5);

    if (i === 1) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${lineSpinFade} 1.2s ${delay('0.12s', n, i)} infinite ease-in-out`,
        left: 0,
        top: radius,
      };
    } else if (i === 2) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${lineSpinFade} 1.2s ${delay('0.12s', n, i)} infinite ease-in-out`,
        left: quarter,
        top: quarter,
        transform: 'rotate(-45deg)',
      };
    } else if (i === 3) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${lineSpinFade} 1.2s ${delay('0.12s', n, i)} infinite ease-in-out`,
        left: radius,
        top: 0,
        transform: 'rotate(90deg)',
      };
    } else if (i === 4) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${lineSpinFade} 1.2s ${delay('0.12s', n, i)} infinite ease-in-out`,
        left: quarter,
        top: `-${quarter}`,
        transform: 'rotate(45deg)',
      };
    } else if (i === 5) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${lineSpinFade} 1.2s ${delay('0.12s', n, i)} infinite ease-in-out`,
        left: '0',
        top: `-${radius}`,
      };
    } else if (i === 6) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${lineSpinFade} 1.2s ${delay('0.12s', n, i)} infinite ease-in-out`,
        left: `-${quarter}`,
        top: `-${quarter}`,
        transform: 'rotate(-45deg)',
      };
    } else if (i === 7) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${lineSpinFade} 1.2s ${delay('0.12s', n, i)} infinite ease-in-out`,
        left: `-${radius}`,
        top: '0',
        transform: 'rotate(90deg)',
      };
    } else if (i === 8) {
      grid[`> div:nth-child(${i})`] = {
        animation: `${lineSpinFade} 1.2s ${delay('0.12s', n, i)} infinite ease-in-out`,
        left: `-${quarter}`,
        top: quarter,
        transform: 'rotate(45deg)',
      };
    }
  }

  return grid;
}

export default (color?: string) => css(
  lineSpinFadeLoader(),
  {
    ' > div': lines(color),
  },
  {
    ' > div': globalAnimation(),
  },
  {
    left: '-4px',
    position: 'relative',
    top: '-10px',

    ' > div': {
      height: '15px',
      position: 'absolute',
      width: '5px',
    },
  },
);
