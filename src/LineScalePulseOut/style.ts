import { css, keyframes } from 'glamor';
import { globalAnimation, lines } from '../mixins';
import { delay } from '../utilities';

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

export default (color?: string) => css(
  {
    ' > div': lines(color),
  },
  {
    ' > div': globalAnimation(),
  },
  {
    ' > div': {
      // tslint:disable-next-line: max-line-length
      animation: `${lineScalePulseOut} 0.9s ${delay('0.2s', 3, 0)} infinite cubic-bezier(.85,.25,.37,.85)`,
      display: 'inline-block',

      '&:nth-child(2), &:nth-child(4)': {
        animationDelay: `${delay('0.2s', 3, 1)} !important`,
      },

      '&:nth-child(1), &:nth-child(5)': {
        animationDelay: `${delay('0.2s', 3, 2)} !important`,
      },
    },
  },
);
