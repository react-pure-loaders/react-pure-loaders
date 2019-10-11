import { keyframes } from '@emotion/core';
import { globalAnimation, lines, ballGrid } from '../mixins';

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

export default (color?: string) => ({
    ...ballGrid(),
    ' > div': {
        ...lines(color),
        ...globalAnimation(),
        animationDelay: '0',
        animationIterationCount: 'infinite',
        animationName: ballBeat,
        display: 'inline-block',
    },
});
