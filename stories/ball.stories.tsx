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
storiesOf('Ball Loaders', module)
    .addDecorator(withKnobs)
    .add('Beat', () => {
        return (
            <div style={style}>
                <BallBeat
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Clip Rotate', () => {
        return (
            <div style={style}>
                <BallClipRotate
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Clip Rotate Multiple', () => {
        return (
            <div style={style}>
                <BallClipRotateMultiple
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Clip Rotate Pulse', () => {
        return (
            <div style={style}>
                <BallClipRotatePulse
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Grid Beat', () => {
        return (
            <div style={style}>
                <BallGridBeat
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Grid Pulse', () => {
        return (
            <div style={style}>
                <BallGridPulse
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Pulse', () => {
        return (
            <div style={style}>
                <BallPulse
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Pulse Rise', () => {
        return (
            <div style={style}>
                <BallPulseRise
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Pulse Round', () => {
        return (
            <div style={style}>
                <BallPulseRound
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Pulse Sync', () => {
        return (
            <div style={style}>
                <BallPulseSync
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Rotate', () => {
        return (
            <div style={style}>
                <BallRotate
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Scale', () => {
        return (
            <div style={style}>
                <BallScale
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Scale Multiple', () => {
        return (
            <div style={style}>
                <BallScaleMultiple
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Scale Random', () => {
        return (
            <div style={style}>
                <BallScaleRandom
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Scale Ripple', () => {
        return (
            <div style={style}>
                <BallScaleRipple
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Scale Ripple Multiple', () => {
        return (
            <div style={style}>
                <BallScaleRippleMultiple
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Spin Fade Loader', () => {
        return (
            <div style={style}>
                <BallSpinFadeLoader
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Spin Loader', () => {
        return (
            <div style={style}>
                <BallSpinLoader
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Triangle Path', () => {
        return (
            <div style={style}>
                <BallTrianglePath
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Zig Zag', () => {
        return (
            <div style={style}>
                <BallZigZag
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    })
    .add('Zig Zag Deflect', () => {
        return (
            <div style={style}>
                <BallZigZagDeflect
                    color={color('Color', defaultColor)}
                    loading={boolean('loading', true)}
                />
            </div>
        );
    });
