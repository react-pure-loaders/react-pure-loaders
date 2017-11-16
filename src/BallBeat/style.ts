import { css, keyframes } from 'glamor';
import { balls, globalAnimation } from '../mixins';

const ballBeat = keyframes({
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
  },
  '50%': {
    opacity: 0.2,
    transform: 'scale(0.75)',
  },
});

export default css(
  {
    ' > div': balls(),
  },
  {
    ' > div': globalAnimation(),
  },
  {
    ' > div': {
      '&:nth-child(2n-1)': {
        animationDelay: '-0.35s !important',
      },

      animation: `${ballBeat} 0.7s 0s infinite linear`,
      display: 'inline-block',
    },
  },
);
