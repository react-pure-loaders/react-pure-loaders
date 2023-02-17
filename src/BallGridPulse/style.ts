import { keyframes } from '@emotion/react';
import { ballGrid, balls, globalAnimation } from '../mixins';
import { BALL_SIZE, MARGIN } from '../variables';

const ballGridPulse = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
  },
  '50%': {
    opacity: 0.7,
    transform: 'scale(0.5)',
  },
});


export default (color?: string) => ({
  width: (parseInt(BALL_SIZE, 10) * 3) + parseInt(MARGIN, 10) * 6,
  ' > div': {
    ...balls(color),
    ...globalAnimation(),
    animationDelay: '0',
    animationIterationCount: 'infinite',
    animationName: ballGridPulse,
    display: 'inline-block',
    float: 'left' as 'left',
  },
  ...ballGrid(),
});
