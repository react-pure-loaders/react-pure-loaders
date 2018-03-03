import { css, keyframes } from 'glamor';
import { globalAnimation } from '../mixins';
import { delay } from '../utilities';
import { PRIMARY_COLOR } from '../variables';

const size = '50px';
const ballScaleRippleMultiple = keyframes({
  '0%': {
    opacity: 1,
    transform: 'scale(0.1)',
  },
  '100%': {
    opacity: 0.0,
  },
  '70%': {
    opacity: 0.7,
    transform: 'scale(1)',
  },
});

interface IGrid {
  [id: string]: object;
}

function ballScaleRipple() {
  const n = 3;
  let i = 0;
  const grid: IGrid = {};
  for (; i < 4; i += 1) {
    grid[`> div:nth-child(${i})`] = {
      animationDelay: delay('0.2s', n, i - 1),
    };
  }

  return grid;
}

export default (color?: string) => css(
  ballScaleRipple(),
  {
    ' > div': globalAnimation(),
  },
  {
    position: 'relative',
    transform: `translateY(-${parseInt(size, 10) / 2})`,

    ' > div': {
      animation: `${ballScaleRippleMultiple} 1.25s 0s infinite cubic-bezier(.21,.53,.56,.8)`,
      border: `2px solid ${color ? color : PRIMARY_COLOR}`,
      borderRadius: '100%',
      height: size,
      left: '-26px',
      position: 'absolute',
      top: '-2px',
      width: size,
    },
  },
);
