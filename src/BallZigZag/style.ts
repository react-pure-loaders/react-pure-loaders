import { css, keyframes } from 'glamor';
import { balls, globalAnimation } from '../mixins';

const amount = '30px';

const ballZig = keyframes({
  '100%': {
    transform: 'translate(0, 0)',
  },
  '33%': {
    transform: `translate(-${parseInt(amount, 10) / 2}px, -${amount})`,
  },
  '66%': {
    transform: `translate(${parseInt(amount, 10) / 2}px, -${amount})`,
  },
});

const ballZag = keyframes({
  '100%': {
    transform: 'translate(0, 0)',
  },
  '33%': {
    transform: `translate(${parseInt(amount, 10) / 2}px, ${amount})`,
  },
  '66%': {
    transform: `translate(-${parseInt(amount, 10) / 2}px, ${amount})`,
  },
});

export default css(
  {
    ' > div': balls(),
  },
  {
    ' > div': globalAnimation(),
  },
  {
    position: 'relative',
    transform: `translate(-${parseInt(amount, 10) / 2}px, -${parseInt(amount, 10) / 2}px)`,

    ' > div': {
      left: '-7px',
      marginLeft: (parseInt(amount, 10) / 2),
      position: 'absolute',
      top: '4px',

      '&:first-child': {
        animation: `${ballZig} 0.7s 0s infinite linear`,
      },

      '&:last-child': {
        animation: `${ballZag} 0.7s 0s infinite linear`,
      },
    },
  },
);
