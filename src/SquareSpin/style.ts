import { css, keyframes } from 'glamor';
import { globalAnimation } from '../mixins';
import { PRIMARY_COLOR } from '../variables';

const squareSpin = keyframes({
  '100%': {
    transform: 'perspective(100px) rotateX(0) rotateY(0)',
  },
  '25%': {
    transform: 'perspective(100px) rotateX(180deg) rotateY(0)',
  },
  '50%': {
    transform: 'perspective(100px) rotateX(180deg) rotateY(180deg)',
  },
  '75%': {
    transform: 'perspective(100px) rotateX(0) rotateY(180deg)',
  },
});

export default css(
  {
    ' > div': globalAnimation(),
  },
  {
    ' > div': {
      animation: `${squareSpin} 3s 0s cubic-bezier(.09,.57,.49,.9) infinite`,
      background: PRIMARY_COLOR,
      height: '50px',
      width: '50px',
    },
  },
);
