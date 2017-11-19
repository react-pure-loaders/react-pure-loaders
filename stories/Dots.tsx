import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { divStyle, loadersStyle, loaderStyle } from './styles';

// import { action } from '@storybook/addon-actions';
// import { withKnobs } from '@storybook/addon-knobs';

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
} from '../src/index'

const stories = storiesOf('Dots', module);

// stories.addDecorator(withKnobs);

stories.add('Dots', () => {
  return (
    <div style={divStyle}>
      <div style={loadersStyle}>
        <div style={loaderStyle}>
          <BallBeat
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallClipRotate
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallClipRotateMultiple
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallClipRotatePulse
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallGridBeat
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallGridPulse
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallPulse
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallPulseRise
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallPulseRound
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallPulseSync
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallRotate
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallScale
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallScaleMultiple
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallScaleRandom
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallScaleRipple
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallScaleRippleMultiple
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallSpinFadeLoader
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallSpinLoader
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallTrianglePath
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallZigZag
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <BallZigZagDeflect
            loading={true}
          />
        </div>
      </div>
    </div>
  );
});
