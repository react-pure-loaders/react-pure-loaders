import { keyframes } from '@emotion/core';
import { balls, globalAnimation } from '../mixins';

const amount = '30px';

const ballZigDeflect = keyframes({
    '100%': {
        transform: 'translate(0, 0)',
    },
    '17%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, -${amount})`,
    },
    '34%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, -${amount})`,
    },
    '50%': {
        transform: 'translate(0, 0)',
    },
    '67%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, -${amount})`,
    },
    '84%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, -${amount})`,
    },
});

const ballZagDeflect = keyframes({
    '100%': {
        transform: 'translate(0, 0)',
    },
    '17%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, ${amount})`,
    },
    '34%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, ${amount})`,
    },
    '50%': {
        transform: 'translate(0, 0)',
    },
    '67%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, ${amount})`,
    },
    '84%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, ${amount})`,
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
            animation: `${ballZigDeflect} 1.5s 0s infinite linear`,
        },

        '&:last-child': {
            animation: `${ballZagDeflect} 1.5s 0s infinite linear`,
        },
    },
});
