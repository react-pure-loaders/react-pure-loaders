import { keyframes } from '@emotion/core';
import { globalAnimation } from '../mixins';
import { PRIMARY_COLOR } from '../variables';

const size = '35px';
const pos = 30;

const spinRotate = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
  '50%': {
    transform: 'rotate(180deg)',
  },
});

export default (color?: string) => ({
  height: size,
  overflow: 'hidden',
  position: 'relative' as 'relative',
  width: size,
  ' > div': {
    ...globalAnimation(),
    animation: `${spinRotate} 0.6s 0s infinite linear`,
    backgroundImage: `linear-gradient(transparent 0%, transparent ${(100 - pos)}%, ${color || PRIMARY_COLOR} ${pos}%, ${color || PRIMARY_COLOR} 100%)`,
    borderRadius: '100%',
    borderWidth: '0px',
    height: '100%',
    position: 'absolute' as 'absolute',
    width: '100%',
  },
});
