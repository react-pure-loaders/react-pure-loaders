import React from 'react';
import { storiesOf } from '@storybook/react';
import addonBackgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withInfo } from '@storybook/addon-info';
import { color, withKnobs } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import ReadmeMd from '../README.md';
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
  CubeTransition,
  LineScale,
  LineScaleParty,
  LineScalePulseOut,
  LineScalePulseOutRapid,
  LineScaleRandom,
  LineSpinFadeLoader,
  Pacman,
  SemiCircleSpin,
  SquareSpin,
  TriangleSkewSpin,
} from '../src/index';


const selectedColor = color('Color', '#ffffff');
const backgrounds = addonBackgrounds([
  { name: 'twitter', value: '#00aced', default: true },
  { name: 'facebook', value: '#3b5998' },
]);

storiesOf('Content', module)
  .add('Default', withDocs(ReadmeMd, () => (<div>Hello</div>)));

storiesOf('Ball', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(backgrounds)
  .add('Ball Beat Stuff', withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Button>Click Here</Button>
      ~~~
    `)(() => (
    <BallBeat
      color={selectedColor}
      loading={true}
    />
  )))
  .add('Ball Beat', () => (
    <BallBeat
      color={selectedColor}
      loading={true}
    />
  ))
  .add('Ball Clip Rotate', () => (
    <BallClipRotate
      color={selectedColor}
      loading={true}
    />
  ))
  .add('Ball Clip Rotate Multiple', () => (
    <BallClipRotateMultiple
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallClipRotatePulse', () => (
    <BallClipRotatePulse
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallGridBeat', () => (
    <BallGridBeat
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallGridPulse', () => (
    <BallGridPulse
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallPulse', () => (
    <BallPulse
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallPulseRise', () => (
    <BallPulseRise
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallPulseRound', () => (
    <BallPulseRound
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallPulseSync', () => (
    <BallPulseSync
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallRotate', () => (
    <BallRotate
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallScale', () => (
    <BallScale
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallScaleMultiple', () => (
    <BallScaleMultiple
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallScaleRandom', () => (
    <BallScaleRandom
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallScaleRipple', () => (
    <BallScaleRipple
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallScaleRippleMultiple', () => (
    <BallScaleRippleMultiple
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallSpinFadeLoader', () => (
    <BallSpinFadeLoader
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallSpinLoader', () => (
    <BallSpinLoader
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallTrianglePath', () => (
    <BallTrianglePath
      color={selectedColor}
      loading={true}
    />
  ))
  .add('BallZigZag', () => (
    <BallZigZag
      color={selectedColor}
      loading={true}
    />
  ))
  .add('Ball Zig Zag Deflect', () => (
    <BallZigZagDeflect
      color={selectedColor}
      loading={true}
    />
  ));

storiesOf('Lines', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(backgrounds)
  .add('LineScale', () => (
    <LineScale
      color={selectedColor}
      loading={true}
    />
  ))
  .add('LineScaleParty', () => (
    <LineScaleParty
      color={selectedColor}
      loading={true}
    />
  ))
  .add('LineScalePulseOut', () => (
    <LineScalePulseOut
      color={selectedColor}
      loading={true}
    />
  ))
  .add('LineScalePulseOutRapid', () => (
    <LineScalePulseOutRapid
      color={selectedColor}
      loading={true}
    />
  ))
  .add('LineScaleRandom', () => (
    <LineScaleRandom
      color={selectedColor}
      loading={true}
    />
  ))
  .add('LineSpinFadeLoader', () => (
    <LineSpinFadeLoader
      color={selectedColor}
      loading={true}
    />
  ));

storiesOf('Misc', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(backgrounds)
  .add('CubeTransition', () => (
    <CubeTransition
      color={selectedColor}
      loading={true}
    />
  ))
  .add('Pacman', () => (
    <Pacman
      color={selectedColor}
      loading={true}
    />
  ))
  .add('SemiCircleSpin', () => (
    <SemiCircleSpin
      color={selectedColor}
      loading={true}
    />
  ))
  .add('SquareSpin', () => (
    <SquareSpin
      color={selectedColor}
      loading={true}
    />
  ))
  .add('TriangleSkewSpin', () => (
    <TriangleSkewSpin
      color={selectedColor}
      loading={true}
    />
  ));
