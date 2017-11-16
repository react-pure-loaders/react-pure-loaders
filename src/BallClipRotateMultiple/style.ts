import { css, keyframes } from 'glamor';
import { globalAnimation } from '../mixins';
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

export default css(
  {
    ' > div': globalAnimation(),
  },
  {
    position: 'relative',

    ' > div': {
      animation: `${rotate} 1s 0s ease-in-out infinite`,
      border: `2px solid ${PRIMARY_COLOR}`,
      borderBottomColor: 'transparent',
      borderRadius: '100%',
      borderTopColor: 'transparent',
      height: '35px',
      left: '-20px',
      position: 'absolute',
      top: '-20px',
      width: '35px',

      '&:last-child': {
        animationDirection: 'reverse',
        animationDuration: '0.5s',
        borderColor: `${PRIMARY_COLOR} transparent ${PRIMARY_COLOR} transparent`,
        display: 'inline-block',
        height: '15px',
        left: '-10px',
        top: '-10px',
        width: '15px',
      },
    },
  },
);
