import { color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { divStyle, loadersStyle, loaderStyle } from './styles';

import {
  BallBeat,
  BallClipRotate,
  BallClipRotateMultiple,
  BallClipRotatePulse,
  BallGridBeat,
  BallGridPulse,
  BallPulse,
  BallPulseRise,
  BallPulseRound,
  BallPulseSync,
  BallRotate,
  BallScale,
  BallScaleMultiple,
  BallScaleRandom,
  BallScaleRipple,
  BallScaleRippleMultiple,
  BallSpinFadeLoader,
  BallSpinLoader,
  BallTrianglePath,
  BallZigZag,
  BallZigZagDeflect,
} from '../src/index';

const stories = storiesOf('Dots', module);

stories.addDecorator(withKnobs);

stories.add('Dots', () => {
  const selectedColor = color('Color', '#ffffff');

  return (
    <div style={divStyle}>
      <div style={loadersStyle}>
        <div style={loaderStyle}>
          <BallBeat
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallClipRotate
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallClipRotateMultiple
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallClipRotatePulse
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallGridBeat
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallGridPulse
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallPulse
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallPulseRise
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallPulseRound
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallPulseSync
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallRotate
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallScale
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallScaleMultiple
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallScaleRandom
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallScaleRipple
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallScaleRippleMultiple
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallSpinFadeLoader
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallSpinLoader
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallTrianglePath
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallZigZag
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallZigZagDeflect
            color={selectedColor}
            loading={true}
          />
        </div>
      </div>
    </div>
  );
});
