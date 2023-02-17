import { keyframes } from '@emotion/react';
import { balls, globalAnimation } from '../mixins';

const rotate = keyframes({
  '0%': {
    transform: 'rotate(0deg) scale(1)',
  },
  '100%': {
    transform: 'rotate(360deg) scale(1)',
  },
  '50%': {
    transform: 'rotate(180deg) scale(.6)',
  },
});

export default (color?: string) => ({
  position: 'relative' as 'relative',
  ' > div': {
    ...balls(color),
    ...globalAnimation(),
    position: 'relative' as 'relative',

    '&:first-of-type': {
      animation: `${rotate} 1s 0s cubic-bezier(.7,-.13,.22,.86) infinite`,

    },

    '&:before, &:after': {
      ...balls(color),
      content: '\'\'',
      opacity: 0.8,
      position: 'absolute' as 'absolute',
    },

    '&:before': {
      left: '-28px',
      top: '0px',
    },

    '&:after': {
      left: '25px',
      top: '0px',
    },
  },
});
