import { keyframes } from '@emotion/react';
import { balls, globalAnimation } from '../mixins';

const riseAmount = '30px';

const ballPulseRise = keyframes({
  '0%': {
    transform: 'scale(1.1)',
  },
  '100%': {
    transform: 'scale(1.0)',
  },
  '25%': {
    transform: `translateY(-${riseAmount})`,
  },
  '50%': {
    transform: 'scale(0.4)',
  },
  '75%': {
    transform: `translateY(${riseAmount})`,
  },
  '99%': {
    transform: 'translateY(0)',
  },
});

export default (color?: string) => ({
  ' > div': {
    ...balls(color),
    ...globalAnimation(),
    animationDelay: '0',
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'cubic-bezier(.15,.46,.9,.6)',
    display: 'inline-block',

    '&:nth-of-type(2n)': {
      animationName: ballPulseRise,
    },

    '&:nth-of-type(2n-1)': {
      animationName: ballPulseRise,
    },
  },
});
