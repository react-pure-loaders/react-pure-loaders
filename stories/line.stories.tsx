import React, { cloneElement } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import LineScale from '../src/LineScale';
import LineScaleParty from '../src/LineScaleParty';
import LineScalePulseOut from '../src/LineScalePulseOut';
import LineScalePulseOutRapid from '../src/LineScalePulseOutRapid';
import LineScaleRandom from '../src/LineScaleRandom';
import LineSpinFadeLoader from '../src/LineSpinFadeLoader';

import createStories from '../utils/createStories';

const animationsForStories = [
    {
        name: 'Scale',
        component: <LineScale />,
    },
    {
        name: 'Scale Party',
        component: <LineScaleParty />,
    },
    {
        name: 'Scale Pulse Out',
        component: <LineScalePulseOut />,
    },
    {
        name: 'Scale Pulse Out Rapid',
        component: <LineScalePulseOutRapid />,
    },
    {
        name: 'Scale Random',
        component: <LineScaleRandom />,
    },
    {
        name: 'Spin Fade Loader',
        component: <LineSpinFadeLoader />,
    },
];

const stories = storiesOf('Line Loaders', module);

stories.addDecorator(withKnobs);

createStories(animationsForStories, stories);
