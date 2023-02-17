import { keyframes } from '@emotion/react';
import { globalAnimation } from '../mixins';
import { PRIMARY_COLOR } from '../variables';

const ballScaleRipple = keyframes({
  '0%': {
    opacity: 1,
    transform: 'scale(0.1)',
  },
  '100%': {
    opacity: 0.0,
  },
  '70%': {
    opacity: 0.7,
    transform: 'scale(1)',
  },
});

export default (color?: string) => ({
  ' > div': {
    ...globalAnimation(),
    animation: `${ballScaleRipple} 1s 0s infinite cubic-bezier(.21,.53,.56,.8)`,
    border: `2px solid ${color || PRIMARY_COLOR}`,
    borderRadius: '100%',
    height: '50px',
    width: '50px',
  },
});
