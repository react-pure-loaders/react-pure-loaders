import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, color } from '@storybook/addon-knobs';

import BallBeat from '../src/BallBeat';
import BallClipRotate from '../src/BallClipRotate';
import BallClipRotateMultiple from '../src/BallClipRotateMultiple';
import BallClipRotatePulse from '../src/BallClipRotatePulse';
import BallGridBeat from '../src/BallGridBeat';
import BallGridPulse from '../src/BallGridPulse';
import BallPulse from '../src/BallPulse';
import BallPulseRise from '../src/BallPulseRise';
import BallPulseRound from '../src/BallPulseRound';
import BallPulseSync from '../src/BallPulseSync';
import BallRotate from '../src/BallRotate';
import BallScale from '../src/BallScale';
import BallScaleMultiple from '../src/BallScaleMultiple';
import BallScaleRandom from '../src/BallScaleRandom';
import BallScaleRipple from '../src/BallScaleRipple';
import BallScaleRippleMultiple from '../src/BallScaleRippleMultiple';
import BallSpinFadeLoader from '../src/BallSpinFadeLoader';
import BallSpinLoader from '../src/BallSpinLoader';
import BallTrianglePath from '../src/BallTrianglePath';
import BallZigZag from '../src/BallZigZag';
import BallZigZagDeflect from '../src/BallZigZagDeflect';

const defaultColor = '#000000';
const style = {
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'column' as 'column',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '25%',
    maxWidth: '25%',
    height: '150px',
    alignItems: 'center',
    justifyContent: 'center'
};

const Animation = ({children}) => <div style={style}>{children}</div>

storiesOf('Ball Loaders', module)
    .addDecorator(withKnobs)
    .add('Beat',() => <Animation><BallBeat color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Clip Rotate', () => <Animation><BallClipRotate color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Clip Rotate Multiple', () => <Animation><BallClipRotateMultiple color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Clip Rotate Pulse', () => <Animation><BallClipRotatePulse color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Grid Beat', () => <Animation><BallGridBeat color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Grid Pulse', () => <Animation><BallGridPulse color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Pulse', () => <Animation><BallPulse color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Pulse Rise', () => <Animation><BallPulseRise color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Pulse Round', () => <Animation><BallPulseRound color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Pulse Sync', () => <Animation><BallPulseSync color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Rotate', () => <Animation><BallRotate color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Scale', () => <Animation><BallScale color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Scale Multiple', () => <Animation><BallScaleMultiple color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Scale Random', () => <Animation><BallScaleRandom color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Scale Ripple', () => <Animation><BallScaleRipple color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Scale Ripple Multiple', () => <Animation><BallScaleRippleMultiple color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Spin Fade Loader', () => <Animation><BallSpinFadeLoader color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Spin Loader', () => <Animation><BallSpinLoader color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Triangle Path', () => <Animation><BallTrianglePath color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Zig Zag', () => <Animation><BallZigZag color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
    .add('Zig Zag Deflect', () => <Animation><BallZigZagDeflect color={color('Color', defaultColor)} loading={boolean('loading', true)} /></Animation>)
