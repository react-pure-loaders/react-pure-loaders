import { css } from 'glamor';
import {
  BALL_SIZE,
  LINE_HEIGHT,
  LINE_WIDTH,
  MARGIN,
  PRIMARY_COLOR,
} from '../variables';

interface IGrid {
  [id: string]: object;
}

export function globalBg() {
  return {
    backgroundColor: PRIMARY_COLOR,
  };
}

export function globalAnimation() {
  return {
    animationFillMode: 'both',
  };
}

export function balls() {
  return css(
    {
      borderRadius: '100%',
      height: BALL_SIZE,
      margin: MARGIN,
      width: BALL_SIZE,
    },
    globalBg(),
  );
}

export function ballGrid() {
  let i = 1;
  const grid: IGrid = {};
  for (; i < 10; i += 1) {
    const delay = ((parseInt((Math.random() * 100).toString(), 10) / 100) - 0.2);
    const duration = ((parseInt((Math.random() * 100).toString(), 10) / 100) + 0.6);

    grid[` > div:nth-child(${i})`] = {
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    };
  }

  return grid;
}

export function lines() {
  return css(
    {
      borderRadius: '2px',
      height: LINE_HEIGHT,
      margin: MARGIN,
      width: LINE_WIDTH,
    },
    globalBg(),
  );
}
