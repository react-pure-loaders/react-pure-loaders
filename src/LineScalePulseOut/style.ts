import { keyframes } from '@emotion/react';
import { globalAnimation, lines } from '../mixins';
import delay from '../utilities';

const lineScalePulseOut = keyframes({
  '0%': {
    transform: 'scaley(1.0)',
  },
  '100%': {
    transform: 'scaley(1.0)',
  },
  '50%': {
    transform: 'scaley(0.4)',
  },
});

export default (color?: string) => ({
  ' > div': {
    ...lines(color),
    ...globalAnimation(),
    animation: `${lineScalePulseOut} 0.9s ${delay('0.2s', 3, 0)} infinite cubic-bezier(.85,.25,.37,.85)`,
    display: 'inline-block',

    '&:nth-of-type(2), &:nth-of-type(4)': {
      animationDelay: `${delay('0.2s', 3, 1)} !important`,
    },

    '&:nth-of-type(1), &:nth-of-type(5)': {
      animationDelay: `${delay('0.2s', 3, 2)} !important`,
    },
  },
});
