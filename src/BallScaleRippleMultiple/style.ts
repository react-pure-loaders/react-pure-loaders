import { keyframes } from '@emotion/core';
import { globalAnimation } from '../mixins';
import delay from '../utilities';
import { PRIMARY_COLOR } from '../variables';
import { Grid } from '../types';

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

function ballScaleRipple() {
    const n = 3;
    let i = 0;
    const grid: Grid = {};
    for (; i < 4; i += 1) {
        grid[`> div:nth-of-type(${i})`] = {
            animationDelay: delay('0.2s', n, i - 1),
        };
    }

    return grid;
}

export default (color?: string) => ({
    ...ballScaleRipple(),
    position: 'relative' as 'relative',
    transform: `translateY(-${parseInt(size, 10) / 2})`,
    ' > div': {
        ...globalAnimation(),
        animation: `${ballScaleRippleMultiple} 1.25s 0s infinite cubic-bezier(.21,.53,.56,.8)`,
        border: `2px solid ${color || PRIMARY_COLOR}`,
        borderRadius: '100%',
        height: size,
        left: '-26px',
        position: 'absolute' as 'absolute',
        top: '-2px',
        width: size,

    },
});
