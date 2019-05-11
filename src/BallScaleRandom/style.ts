import { keyframes } from '@emotion/core';
import { balls, globalAnimation } from '../mixins';
import { PRIMARY_COLOR } from '../variables';

const ballBeat = keyframes(
    {
        '100%': {
            opacity: 1,
            transform: 'scale(1)',
        },
        '50%': {
            opacity: 0.2,
            transform: 'scale(0.75)',
        },
    },
);

export default (color?: string) => ({
    ' > div': {
        ...balls(color),
        ...globalAnimation(),
        '&:nth-of-type(2n-1)': {
            animationDelay: '-0.35s',
        },

        animation: `${ballBeat} 0.7s 0s infinite linear`,
        backgroundColor: color || PRIMARY_COLOR,
        display: 'inline-block',
    },
});
