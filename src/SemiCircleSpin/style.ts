import { css, keyframes } from 'glamor';
import { globalAnimation } from '../mixins';
import { PRIMARY_COLOR } from '../variables';

const size = '35px';
const pos: number = 30;

const spinRotate = keyframes({
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
    ' > div': globalAnimation(),
  },
  {
    height: size,
    overflow: 'hidden',
    position: 'relative',
    width: size,

    ' > div': {
      animation: `${spinRotate} 0.6s 0s infinite linear`,
      // tslint:disable-next-line: max-line-length
      backgroundImage: `linear-gradient(transparent 0%, transparent ${(100 - pos)}%, ${color ? color : PRIMARY_COLOR} ${pos}%, ${color ? color : PRIMARY_COLOR} 100%)`,
      borderRadius: '100%',
      borderWidth: '0px',
      height: '100%',
      position: 'absolute',
      width: '100%',
    },
  },
);
