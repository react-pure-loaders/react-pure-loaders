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
    justifyContent: 'center',
};
storiesOf('Ball Loaders', module)
    .addDecorator(withKnobs)
    .add('Beat', () =>
        <div style={style}>
            <BallBeat
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Clip Rotate', () =>
        <div style={style}>
            <BallClipRotate
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Clip Rotate Multiple', () =>
        <div style={style}>
            <BallClipRotateMultiple
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Clip Rotate Pulse', () =>
        <div style={style}>
            <BallClipRotatePulse
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Grid Beat', () =>
        <div style={style}>
            <BallGridBeat
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Grid Pulse', () =>
        <div style={style}>
            <BallGridPulse
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Pulse', () =>
        <div style={style}>
            <BallPulse
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Pulse Rise', () =>
        <div style={style}>
            <BallPulseRise
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Pulse Round', () =>
        <div style={style}>
            <BallPulseRound
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Pulse Sync', () =>
        <div style={style}>
            <BallPulseSync
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Rotate', () =>
        <div style={style}>
            <BallRotate
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Scale', () =>
        <div style={style}>
            <BallScale
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Scale Multiple', () =>
        <div style={style}>
            <BallScaleMultiple
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Scale Random', () =>
        <div style={style}>
            <BallScaleRandom
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Scale Ripple', () =>
        <div style={style}>
            <BallScaleRipple
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Scale Ripple Multiple', () =>
        <div style={style}>
            <BallScaleRippleMultiple
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Spin Fade Loader', () =>
        <div style={style}>
            <BallSpinFadeLoader
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Spin Loader', () =>
        <div style={style}>
            <BallSpinLoader
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Triangle Path', () =>
        <div style={style}>
            <BallTrianglePath
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Zig Zag', () =>
        <div style={style}>
            <BallZigZag
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    )
    .add('Zig Zag Deflect', () =>
        <div style={style}>
            <BallZigZagDeflect
                color={color('Color', defaultColor)}
                loading={boolean('loading', true)}
            />
        </div>
    );
