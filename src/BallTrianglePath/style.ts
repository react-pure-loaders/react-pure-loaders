import { keyframes } from '@emotion/core';
import { balls, globalAnimation } from '../mixins';
import { PRIMARY_COLOR } from '../variables';
import { Grid } from '../types';

const amount = '50px';

const ballTrianglePath1 = keyframes({
  '100%': {
    transform: 'translate(0px, 0px)',
  },
  '33%': {
    transform: `translate(${parseInt(amount, 10) / 2}px, -${amount})`,
  },
  '66%': {
    transform: `translate(${amount}, 0px)`,
  },
});

const ballTrianglePath2 = keyframes({
  '100%': {
    transform: 'translate(0px, 0px)',
  },
  '33%': {
    transform: `translate(${parseInt(amount, 10) / 2}px, ${amount})`,
  },
  '66%': {
    transform: `translate(-${parseInt(amount, 10) / 2}px, ${amount})`,
  },
});

const ballTrianglePath3 = keyframes({
  '100%': {
    transform: 'translate(0px, 0px)',
  },
  '33%': {
    transform: `translate(-${amount}, 0px)`,
  },
  '66%': {
    transform: `translate(-${parseInt(amount, 10) / 2}px, -${amount})`,
  },
});

function ballTrianglePath() {
  const animations = [ballTrianglePath1, ballTrianglePath2, ballTrianglePath3];
  let i = 1;
  const grid: Grid = {};
  for (; i < 4; i += 1) {
    grid[`> div:nth-of-type(${i})`] = {
      animationDelay: '0',
      animationDuration: '2s',
      animationIterationCount: 'infinite',
      animationName: animations[i - 1],
      animationTimingFunction: 'ease-in-out',
    };
  }
  return grid;
}

export default (color?: string) => ({
  ...ballTrianglePath(),
  position: 'relative' as 'relative',
  transform: `translate(-${parseInt(amount, 10) / 1.667}px, -${parseInt(amount, 10) / 1.333}px)`,
  ' > div': {
    ...balls(color),
    ...globalAnimation(),
    border: `1px solid ${color || PRIMARY_COLOR}`,
    borderRadius: '100%',
    height: '10px',
    position: 'absolute' as 'absolute',
    width: '10px',

    '&:nth-of-type(1)': {
      top: amount,
    },

    '&:nth-of-type(2)': {
      left: `${parseInt(amount, 10) / 2}px`,
    },

    '&:nth-of-type(3)': {
      left: amount,
      top: amount,
    },
  },
});
