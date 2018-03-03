import { css, keyframes } from 'glamor';
import { balls, globalAnimation } from '../mixins';
import { PRIMARY_COLOR } from '../variables';

const rotate = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
  '50%': {
    transform: 'rotate(180deg)',
  },
});

export default (color?: string) => css(
  {
    ' > div': balls(color),
  },
  {
    ' > div': globalAnimation(),
  },
  {
    ' > div': {
      animation: `${rotate} 0.75s 0s linear infinite`,
      background: 'transparent !important',
      border: `2px solid ${color ? color : PRIMARY_COLOR}`,
      borderBottomColor: 'transparent',
      display: 'inline-block',
      height: '26px',
      width: '26px',
    },
  },
);
