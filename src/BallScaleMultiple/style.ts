import { css, keyframes } from 'glamor';
import { balls, globalAnimation } from '../mixins';
import { delay } from '../utilities';

const size = '60px';

const ballScaleMultiple = keyframes({
  '0%': {
    opacity: '0',
    transform: 'scale(0.0)',
  },
  '100%': {
    opacity: '0',
    transform: 'scale(1.0)',
  },
  '5%': {
    opacity: '1',
  },
});

interface IGrid {
  [id: string]: object;
}

export function ballScale() {
  const n = 3;
  let i = 2;
  const grid: IGrid = {};
  for (; i < 4; i += 1) {
    grid[`> div:nth-child(${i})`] = {
      animationDelay: delay('0.2s', n, i),
    };
  }

  return grid;
}

export default (color?: string) => css(
  ballScale(),
  {
    ' > div': balls(color),
  },
  {
    ' > div': globalAnimation(),
  },
  {
    position: 'relative',
    transform: `translateY(-${size} / 2)`,

    ' > div': {
      animation: `${ballScaleMultiple} 1s 0s linear infinite`,
      height: size,
      left: '-30px',
      margin: '0',
      opacity: '0',
      position: 'absolute',
      top: '0px',
      width: size,
    },
  },
);
