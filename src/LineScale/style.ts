import { css, keyframes } from 'glamor';
import { globalAnimation, lines } from '../mixins';
import { delay } from '../utilities';

const ballBeat = keyframes({
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

interface IGrid {
  [id: string]: object;
}

function lineScale() {
  const n = 5;
  let i = 1;
  const grid: IGrid = {};
  for (; i < 10; i += 1) {
    grid[`> div:nth-child(${i})`] = {
      animation: `${ballBeat} 1s ${delay('0.1s', n, i)} infinite cubic-bezier(.2,.68,.18,1.08)`,
    };
  }

  return grid;

}

export default css(
  lineScale(),
  {
    ' > div': lines(),
  },
  {
    ' > div': globalAnimation(),
  },
  {
    ' > div': {
      display: 'inline-block',
    },
  },
);
