import { css, keyframes } from 'glamor';
import { balls, globalAnimation } from '../mixins';

const ballPulseRound = keyframes({
  '0%': {
    transform: 'scale(0.0)',
  },
  '100%': {
    transform: 'scale(0.0)',
  },
  '40%': {
    transform: 'scale(1.0)',
  },
  '80%': {
    transform: 'scale(0.0)',
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
      animation: `${ballPulseRound} 1.2s infinite ease-in-out`,
      height: '10px',
      width: '10px',
    },
  },
);
