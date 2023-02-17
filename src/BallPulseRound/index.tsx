/** @jsx jsx */
import { jsx } from '@emotion/react';
import style from './style';
import { BaseProps } from '../types';

export default function BallPulseRound({ color, loading }: BaseProps) {
  if (loading) {
    return (
            <div css={style(color)}>
                <div/>
            </div>
    );
  }

  return null;
}
