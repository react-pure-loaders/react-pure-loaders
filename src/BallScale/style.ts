import { keyframes } from '@emotion/react';
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

export default (color?: string) => ({
  ' > div': {
    ...balls(color),
    ...globalAnimation(),
    animation: `${ballScale} 1s 0s ease-in-out infinite`,
    display: 'inline-block',
    height: '60px',
    width: '60px',
  },
});
