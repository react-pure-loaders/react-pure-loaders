import { keyframes } from '@emotion/core';
import { globalAnimation } from '../mixins';
import { PRIMARY_COLOR } from '../variables';

const size = '20px';
const triangleSkewSpin = keyframes({
    '100%': {
        transform: 'perspective(100px) rotateX(0) rotateY(0)',
    },
    '25%': {
        transform: 'perspective(100px) rotateX(180deg) rotateY(0)',
    },
    '50%': {
        transform: 'perspective(100px) rotateX(180deg) rotateY(180deg)',
    },
    '75%': {
        transform: 'perspective(100px) rotateX(0) rotateY(180deg)',
    },
});

export default (color?: string) => ({
    ' > div': {
        ...globalAnimation(),
        animation: `${triangleSkewSpin} 3s 0s cubic-bezier(.09,.57,.49,.9) infinite`,
        borderBottom: `${size} solid ${color || PRIMARY_COLOR}`,
        borderLeft: `${size} solid transparent`,
        borderRight: `${size} solid transparent`,
        height: '0',
        width: '0',
    },
});
