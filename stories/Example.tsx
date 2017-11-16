import * as React from 'react';
import { storiesOf } from '@storybook/react';
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
  LineScale,
  LineScaleParty,
  LineScalePulseOut,
  LineScalePulseOutRapid,
  LineScaleRandom,
  LineSpinFadeLoader,
  CubeTransition,
  Pacman,
  SemiCircleSpin,
  SquareSpin,
  TriangleSkewSpin,
} from '../src/index'

const stories = storiesOf('Example', module);
const divStyle: object = {
  padding: 0,
  margin: 0,
  height: '100%',
  background: '#ed5565',
};
const loadersStyle: object = {
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flex: '0 1 auto',
  flexDirection: 'row',
  flexWrap: 'wrap',

};
const loaderStyle: object = {
  boxSizing: 'border-box',
  display: 'flex',
  flex: '0 1 auto',
  flexDirection: 'column',
  flexGrow: '1',
  flexShrink: '0',
  flexBasis: '25%',
  maxWidth: '25%',
  height: '200px',
  alignItems: 'center',
  justifyContent: 'center',
};

// stories.addDecorator(withKnobs);

stories.add('Basics', () => {
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
        <div style={loaderStyle}>
          <LineScale
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineScaleParty
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineScalePulseOut
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineScalePulseOutRapid
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineScaleRandom
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineSpinFadeLoader
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <CubeTransition
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <Pacman
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <SemiCircleSpin
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <SquareSpin
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <TriangleSkewSpin
            loading={true}
          />
        </div>
      </div>
    </div>
  );
});
