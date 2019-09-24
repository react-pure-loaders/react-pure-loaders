import { keyframes } from '@emotion/core';
import { globalAnimation, lines } from '../mixins';

const lineScalePulseOutRapid = keyframes({
  '0%': {
    transform: 'scaley(1.0)',
  },
  '80%': {
    transform: 'scaley(0.3)',
  },
  '90%': {
    transform: 'scaley(1.0)',
  },
});

export default (color?: string) => ({
  ' > div': {
    ...lines(color),
    ...globalAnimation(),
    animation: `${lineScalePulseOutRapid} 0.9s -0.5s infinite cubic-bezier(.11,.49,.38,.78)`,
    display: 'inline-block',
    verticalAlign: 'middle',

    '&:nth-of-type(2), &:nth-of-type(4)': {
      animationDelay: '-0.25s !important',
    },

    '&:nth-of-type(1), &:nth-of-type(5)': {
      animationDelay: '0s !important',
    },
  },
});
