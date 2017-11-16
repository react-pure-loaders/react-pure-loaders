import { css, keyframes } from 'glamor';
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

export default css(
  {
    ' > div': lines(),
  },
  {
    ' > div': globalAnimation(),
  },
  {
    ' > div': {
      animation: `${lineScalePulseOutRapid} 0.9s -0.5s infinite cubic-bezier(.11,.49,.38,.78)`,
      display: 'inline-block',
      verticalAlign: 'middle',

      '&:nth-child(2), &:nth-child(4)': {
        animationDelay: '-0.25s !important',
      },

      '&:nth-child(1), &:nth-child(5)': {
        animationDelay: '0s !important',
      },
    },
  },
);
