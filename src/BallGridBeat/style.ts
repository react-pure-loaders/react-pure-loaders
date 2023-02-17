import { keyframes } from '@emotion/react';
import { ballGrid, balls, globalAnimation } from '../mixins';
import { BALL_SIZE, MARGIN } from '../variables';

const ballGridBeat = keyframes({
  '100%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.7,
  },
});

export default (color?: string) => ({
  ...ballGrid(),
  width: (parseInt(BALL_SIZE, 10) * 3) + parseInt(MARGIN, 10) * 6,
  ' > div': {
    ...balls(color),
    ...globalAnimation(),
    display: 'inline-block',
    float: 'left' as 'left',
    animationName: ballGridBeat,
    animationIterationCount: 'infinite',
    animationDelay: '0',
  },
});
