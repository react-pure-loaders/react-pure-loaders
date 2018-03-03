import { css, keyframes } from 'glamor';
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

export default (color?: string) => css(
  ballGrid(),
  {
    ' > div': balls(color),
  },
  {
    ' > div': globalAnimation(),
  },
  {
    width: (parseInt(BALL_SIZE, 10) * 3) + parseInt(MARGIN, 10) * 6,

    ' > div': {
      animationDelay: 0,
      animationIterationCount: 'infinite',
      animationName: ballGridBeat,
      display: 'inline-block',
      float: 'left',
    },
  },
);
