/** @jsx jsx */
import { jsx } from '@emotion/react';
import style from './style';
import { BaseProps } from '../types';

export default function BallClipRotate({ color, loading }: BaseProps) {
  if (loading) {
    return (
            <div css={style(color)} data-testid="ball-clip-rotate-container">
                <div/>
            </div>
    );
  }

  return null;
}
