/** @jsx jsx */
import { jsx } from '@emotion/react';
import style from './style';
import { BaseProps } from '../types';

export default function BallPulseRise({ color, loading }: BaseProps) {
  if (loading) {
    return (
            <div css={style(color)}>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
    );
  }

  return null;
}
