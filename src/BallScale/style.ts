import { css, keyframes } from 'glamor';
import { balls, globalAnimation } from '../mixins';

const ballScale = keyframes(
  {
    '0%': {
      transform: 'scale(0.0)',
    },
    '100%': {
      opacity: 0,
      transform: 'scale(1.0)',
    },
  },
);

export default css(
  {
    ' > div': balls(),
  },
  {
    ' > div': globalAnimation(),
  },
  {
    ' > div': {
      animation: `${ballScale} 1s 0s ease-in-out infinite`,
      display: 'inline-block',
      height: '60px',
      width: '60px',
    },
  },
);
