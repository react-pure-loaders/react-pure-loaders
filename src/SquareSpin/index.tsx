/** @jsx jsx */
import { jsx } from '@emotion/core';
import style from './style';
import { BaseProps } from '../types';

export default function SquareSpin({ color, loading }: BaseProps) {
  if (loading) {
    return (
            <div css={style(color)}>
                <div/>
            </div>
    );
  }

  return null;
}
