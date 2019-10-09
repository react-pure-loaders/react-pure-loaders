import { keyframes } from '@emotion/core';
import { globalAnimation } from '../mixins';
import { PRIMARY_COLOR } from '../variables';

const rotate = keyframes({
    '0%': {
        transform: 'rotate(0deg) scale(1)',
    },
    '100%': {
        transform: 'rotate(360deg) scale(1)',
    },
    '50%': {
        transform: 'rotate(180deg) scale(0.6)',
    },
});

export default (color?: string) => ({
    position: 'relative' as 'relative',
    ' > div': {
        ...globalAnimation(),
        animation: `${rotate} 1s 0s ease-in-out infinite`,
        border: `2px solid ${color || PRIMARY_COLOR}`,
        borderBottomColor: 'transparent',
        borderRadius: '100%',
        borderTopColor: 'transparent',
        height: '35px',
        left: '-20px',
        position: 'absolute' as 'absolute',
        top: '-20px',
        width: '35px',

        '&:last-child': {
            animationDirection: 'reverse',
            animationDuration: '0.5s',
            borderColor: `${color || PRIMARY_COLOR} transparent ${color || PRIMARY_COLOR} transparent`,
            display: 'inline-block',
            height: '15px',
            left: '-10px',
            top: '-10px',
            width: '15px',
        },
    },
});
