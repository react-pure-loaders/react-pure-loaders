import { keyframes } from '@emotion/core';
import { balls, globalAnimation } from '../mixins';

const amount = '30px';

const ballZig = keyframes({
    '100%': {
        transform: 'translate(0, 0)',
    },
    '33%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, -${amount})`,
    },
    '66%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, -${amount})`,
    },
});

const ballZag = keyframes({
    '100%': {
        transform: 'translate(0, 0)',
    },
    '33%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, ${amount})`,
    },
    '66%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, ${amount})`,
    },
});

export default (color?: string) => ({
    position: 'relative' as 'relative',
    transform: `translate(-${parseInt(amount, 10) / 2}px, -${parseInt(amount, 10) / 2}px)`,
    ' > div': {
        ...balls(color),
        ...globalAnimation(),
        left: '-7px',
        marginLeft: (parseInt(amount, 10) / 2),
        position: 'absolute' as 'absolute',
        top: '4px',

        '&:first-of-type': {
            animation: `${ballZig} 0.7s 0s infinite linear`,
        },

        '&:last-child': {
            animation: `${ballZag} 0.7s 0s infinite linear`,
        },
    },
});
