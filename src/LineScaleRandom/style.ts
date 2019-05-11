// TODO
// import { keyframes } from '@emotion/core';
import { globalAnimation, lines } from '../mixins';
import { Grid } from '../types';

// const random = 0.5;

// const ballBeat = keyframes({
//     '0%': {
//         transform: 'scale(1.0)',
//     },
//     '100%': {
//         transform: 'scale(1.0)',
//     },
//     '50%': {
//         transform: `scale(${random})`,
//     },
// });

function lineScale() {
    let i = 1;
    const grid: Grid = {};
    for (; i < 5; i += 1) {
        const delay = ((parseInt((Math.random() * 100).toString(), 10) / 100) - 0.2);
        const duration = ((parseInt((Math.random() * 100).toString(), 10) / 100) + 0.3);

        grid[` > div:nth-of-type(${i})`] = {
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
        };
    }

    return grid;
}

export default (color?: string) => ({
    ...lineScale(),
    ' > div': {
        ...lines(color),
        ...globalAnimation(),
        animationDelay: '0',
        animationIterationCount: 'infinite',
        // animationName: ballBeat,
        display: 'inline-block',
    },
});
