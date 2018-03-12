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
import { backgroundColors } from './background-colors'

const selectedColor = color('Color', '#ffffff');
const backgrounds = addonBackgrounds(backgroundColors);

const demoColor = '#000000';

const style = {
  display: '-webkit-flex',
  display: 'flex',
  WebkitFlex: '0 1 auto',
  flex: '0 1 auto',
  WebkitFlexDirection: 'column',
  flexDirection: 'column',
  WebkitFlexGrow: 1,
  flexGrow: 1,
  WebkitFlexShrink: 0,
  flexShrink: 0,
  WebkitFlexBasis: '25%',
  flexBasis: '25%',
  maxWidth: '25%',
  height: '150px',
  WebkitAlignItems: 'center',
  alignItems: 'center',
  WebkitJustifyContent: 'center',
  justifyContent: 'center'
};

storiesOf('Content', module)
  .add('Default', withDocs(ReadmeMd, () => (<div style={{
    boxSizing: 'border-box',
    display: '-webkit-flex',
    display: 'flex',
    WebkitFlex: '0 1 auto',
    flex: '0 1 auto',
    WebkitFlexDirection: 'row',
    flexDirection: 'row',
    WebkitFlexWrap: 'wrap',
    flexWrap: 'wrap'
  }}>
    <div style={style}>
      <BallBeat color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallClipRotate color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallClipRotateMultiple color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallClipRotatePulse color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallGridPulse color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallPulse color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallPulseRise color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallPulseSync color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallRotate color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallScale color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallScaleMultiple color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallScaleRandom color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallScaleRipple color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallScaleRippleMultiple color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallSpinFadeLoader color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallTrianglePath color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallZigZag color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <BallZigZagDeflect color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <CubeTransition color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <LineScale color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <LineScaleParty color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <LineScalePulseOut color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <LineScalePulseOutRapid color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <LineScaleRandom color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <LineSpinFadeLoader color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <SemiCircleSpin color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <SquareSpin color={demoColor} loading={true}/>
    </div>
    <div style={style}>
      <TriangleSkewSpin color={demoColor} loading={true}/>
    </div>
  </div>)));

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
