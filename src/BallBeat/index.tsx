/** @jsx jsx */
import { jsx } from '@emotion/react';
import style from './style';
import { BaseProps } from '../types';

export default function BallBeat({ color, loading }: BaseProps) {
  if (loading) {
    return (
      <div css={style(color)} data-testid="ball-beat-container">
        <div />
        <div />
        <div />
      </div>
    );
  }

  return null;
}