import { keyframes } from '@emotion/core';
import { balls, globalAnimation } from '../mixins';
import delay from '../utilities';
import { Pulse } from '../types';

const scale = keyframes({
    '0%': {
        opacity: 1,
        transform: 'scale(1)',
    },
    '45%': {
        opacity: 0.7,
        transform: 'scale(0.1)',
    },
    '80%': {
        opacity: 1,
        transform: 'scale(1)',
    },
});

export function ballPulse() {
    const n = 3;
    let i = 1;
    const grid: Pulse = {};
    for (; i < 4; i += 1) {
        grid[`> div:nth-of-type(${i})`] = {
            animation: `${scale} 0.75s ${delay('0.12s', n, i)} infinite cubic-bezier(.2,.68,.18,1.08)`,
        };
    }

    return grid;
}

export default (color?: string) => ({
    ...ballPulse(),
    ' > div': {
        ...balls(color),
        ...globalAnimation(),
        display: 'inline-block',
    },
});
