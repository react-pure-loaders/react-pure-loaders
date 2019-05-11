import { keyframes } from '@emotion/core';
import { globalAnimation } from '../mixins';
import { PRIMARY_COLOR } from '../variables';

const amount = '50px';
const size = '10px';

const ballBeat = keyframes({
    '100%': {
        transform: 'rotate(-360deg)',
    },
    '25%': {
        transform: `translateX(${amount}) scale(0.5) rotate(-90deg)`,
    },
    '50%': {
        transform: `translate(${amount}, ${amount}) rotate(-180deg)`,
    },
    '75%': {
        transform: `translateY(${amount}) scale(0.5) rotate(-270deg)`,
    },
});

export default (color?: string) => ({
    position: 'relative' as 'relative',
    transform: `translate(-${parseInt(amount, 10) / 2}, -${parseInt(amount, 10) / 2})`,
    ' > div': {
        ...globalAnimation(),
        animation: `${ballBeat} 1.6s 0s infinite ease-in-out`,
        backgroundColor: color || PRIMARY_COLOR,
        height: size,
        left: '-5px',
        position: 'absolute' as 'absolute',
        top: '-5px',
        width: size,

        '&:last-child': {
            animationDelay: '-0.8s',
        },
    },
});
