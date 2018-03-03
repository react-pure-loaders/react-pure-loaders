import { css, keyframes } from 'glamor';
import { globalAnimation, lines } from '../mixins';

const random = 0.5;

const ballBeat = keyframes({
  '0%': {
    transform: 'scale(1.0)',
  },
  '100%': {
    transform: 'scale(1.0)',
  },
  '50%': {
    transform: `scale(${random})`,
  },
});

interface IGrid {
  [id: string]: object;
}

function lineScale() {
  let i = 1;
  const grid: IGrid = {};
  for (; i < 5; i += 1) {
    const delay = ((parseInt((Math.random() * 100).toString(), 10) / 100) - 0.2);
    const duration = ((parseInt((Math.random() * 100).toString(), 10) / 100) + 0.3);

    grid[` > div:nth-child(${i})`] = {
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    };
  }

  return grid;
}

export default (color?: string) => css(
  lineScale(),
  {
    ' > div': lines(color),
  },
  {
    ' > div': globalAnimation(),
  },
  {
    ' > div': {
      animationDelay: '0',
      animationIterationCount: 'infinite',
      animationName: ballBeat,
      display: 'inline-block',
    },
  },
);
