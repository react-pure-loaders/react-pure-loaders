import React, { cloneElement } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

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

import createStories from '../utils/createStories';

const animationsStories = [
    {
        name: 'Beat',
        component: <BallBeat />,
    },
    {
        name: 'Clip Rotate',
        component: <BallClipRotate />,
    },
    {
        name: 'Clip Rotate Multiple',
        component: <BallClipRotateMultiple />,
    },
    {
        name: 'Clip Rotate Pulse',
        component: <BallClipRotatePulse />,
    },
    {
        name: 'Grid Beat',
        component: <BallGridBeat />,
    },
    {
        name: 'Grid Pulse',
        component: <BallGridPulse />,
    },
    {
        name: 'Pulse',
        component: <BallPulse />,
    },
    {
        name: 'Pulse Rise',
        component: <BallPulseRise />,
    },
    {
        name: 'Pulse Round',
        component: <BallPulseRound />,
    },
    {
        name: 'Pulse Sync',
        component: <BallPulseSync />,
    },
    {
        name: 'Rotate',
        component: <BallRotate />,
    },
    {
        name: 'Scale',
        component: <BallScale />,
    },
    {
        name: 'Scale Multiple',
        component: <BallScaleMultiple />,
    },
    {
        name: 'Scale Random',
        component: <BallScaleRandom />,
    },
    {
        name: 'Scale Ripple',
        component: <BallScaleRipple />,
    },
    {
        name: 'Scale Ripple Multiple',
        component: <BallScaleRippleMultiple />,
    },
    {
        name: 'Spin Fade Loader',
        component: <BallSpinFadeLoader />,
    },
    {
        name: 'Spin Loader',
        component: <BallSpinLoader />,
    },
    {
        name: 'Triangle Path',
        component: <BallTrianglePath />,
    },
    {
        name: 'Zig Zag',
        component: <BallZigZag />,
    },
    {
        name: 'Zig Zag Deflect',
        component: <BallZigZagDeflect />,
    },
];

const stories = storiesOf('Ball Loaders', module);

stories.addDecorator(withKnobs);

createStories(animationsStories, stories);
