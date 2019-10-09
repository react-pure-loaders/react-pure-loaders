import {
    BALL_SIZE,
    LINE_HEIGHT,
    LINE_WIDTH,
    MARGIN,
    PRIMARY_COLOR,
} from '../variables';
import { Grid } from '../types';

export const globalBg = (color?: string) => ({
    backgroundColor: color || PRIMARY_COLOR,
});

export const globalAnimation = () => ({ animationFillMode: 'both' });

export const balls = (color?: string) => ({
    borderRadius: '100%',
    height: BALL_SIZE,
    margin: MARGIN,
    width: BALL_SIZE,
    ...globalBg(color),
});

export const lines = (color?: string) => ({
    borderRadius: '2px',
    height: LINE_HEIGHT,
    margin: MARGIN,
    width: LINE_WIDTH,
    ...globalBg(color),
});

export function ballGrid() {
    let i = 1;
    const grid: Grid = {};
    for (; i < 10; i += 1) {
        const delay = parseInt((Math.random() * 100).toString(), 10) / 100 - 0.2;
        const duration = parseInt((Math.random() * 100).toString(), 10) / 100 + 0.6;

        grid[` > div:nth-of-type(${i})`] = {
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
        };
    }
    return grid;
}
