import { keyframes } from '@emotion/core';
import { balls, globalAnimation } from '../mixins';
import { PRIMARY_COLOR } from '../variables';

const rotate = keyframes({
  '0%': {
    transform: 'rotate(0deg) scale(1)',
  },
  '100%': {
    transform: 'rotate(360deg) scale(1)',
  },
  '50%': {
    transform: 'rotate(180deg) scale(0.6)',
  },
});

const scale = keyframes({
  '100%': {
    transform: 'scale(1)',
  },
  '30%': {
    transform: 'scale(0.3)',
  },
});

export default (color?: string) => ({
  position: 'relative' as 'relative',
  transform: 'translateY(-15px)',

  ' > div': {
    ...balls(color),
    ...globalAnimation(),
    borderRadius: '100%',
    left: '0px',
    position: 'absolute' as 'absolute',
    top: '0px',

    '&:first-of-type': {
      animation: `${scale} 1s 0s cubic-bezier(.09,.57,.49,.9) infinite`,
      background: color || PRIMARY_COLOR,
      height: '16px',
      left: '-7px',
      top: '7px',
      width: '16px',
    },

    '&:last-child': {
      animation: `${rotate} 1s 0s cubic-bezier(.09,.57,.49,.9) infinite`,
      animationDuration: '1s',
      background: 'transparent',
      border: '2px solid',
      borderColor: `${color || PRIMARY_COLOR} transparent ${color || PRIMARY_COLOR} transparent`,
      height: '30px',
      left: '-16px',
      position: 'absolute' as 'absolute',
      top: '-2px',
      width: '30px',
    },
  },
});
