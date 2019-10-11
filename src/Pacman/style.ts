import { keyframes } from '@emotion/core';
import { balls } from '../mixins';
import delay from '../utilities';
import { PRIMARY_COLOR } from '../variables';
import { Grid } from '../types';

const size = '25px';

const rotatePacmanHalfUp = keyframes({
    '0%': {
        transform: 'rotate(270deg)',
    },
    '100%': {
        transform: 'rotate(270deg)',
    },
    '50%': {
        transform: 'rotate(360deg)',
    },
});

const rotatePacmanHalfDown = keyframes({
    '0%': {
        transform: 'rotate(90deg)',
    },
    '100%': {
        transform: 'rotate(90deg)',
    },
    '50%': {
        transform: 'rotate(0deg)',
    },
});

const pacmanBalls = keyframes(
    {
        '100%': {
            transform: `translate(-${4 * parseInt(size, 10)}px, -${parseInt(size, 10) / 4}px)`,
        },
        '75%': {
            opacity: 0.7,
        },
    },
);

const pacmanDesign = (color?: string) => ({
    borderBottom: `${size} solid ${color || PRIMARY_COLOR}`,
    borderLeft: `${size} solid ${color || PRIMARY_COLOR}`,
    borderRadius: size,
    borderRight: `${size} solid transparent`,
    borderTop: `${size} solid ${color || PRIMARY_COLOR}`,
    height: '0px',
    width: '0px',
});

function ballPlacement() {
    const n = 3;
    let i = 0;
    const grid: Grid = {};
    for (; i < 4; i += 1) {
        grid[`> div:nth-of-type(${i + 2})`] = {
            animation: `${pacmanBalls} 1s ${delay('.33s', n, i)} infinite linear`,
        };
    }

    return grid;
}

export default (color?: string) => ({
    ...ballPlacement(),
    position: 'relative' as 'relative',
    ' > div:first-of-type': {
        ...pacmanDesign(color),
        animation: `${rotatePacmanHalfUp} 0.5s 0s infinite`,
        left: '-30px',
        position: 'relative' as 'relative',
    },

    ' > div:nth-of-type(2)': {
        ...pacmanDesign(color),
        animation: `${rotatePacmanHalfDown} 0.5s 0s infinite`,
        left: '-30px',
        marginTop: (-2 * parseInt(size, 10)),
        position: 'relative' as 'relative',
    },

    ' > div:nth-of-type(3), > div:nth-of-type(4), > div:nth-of-type(5), > div:nth-of-type(6)': {
        ...balls(color),
        height: '10px',
        left: '70px',
        position: 'absolute' as 'absolute',
        top: '25px',
        transform: `translate(0,-${parseInt(size, 10) / 4}px)`,
        width: '10px',
    },
});
