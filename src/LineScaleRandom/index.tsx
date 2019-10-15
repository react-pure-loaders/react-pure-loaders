/** @jsx jsx */
import { jsx } from '@emotion/core';
import style from './style';
import { BaseProps } from '../types';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function LineScaleRandom({ color, loading }: BaseProps) {
  if (loading) {
    return (
            <div css={style(color)}>
                <div />
                <div />
                <div />
                <div />
            </div>
    );
  }

  return null;
}
