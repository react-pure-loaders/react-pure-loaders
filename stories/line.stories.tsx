import React, { cloneElement } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, boolean } from '@storybook/addon-knobs';

import LineScale from '../src/LineScale';
import LineScaleParty from '../src/LineScaleParty';
import LineScalePulseOut from '../src/LineScalePulseOut';
import LineScalePulseOutRapid from '../src/LineScalePulseOutRapid';
import LineScaleRandom from '../src/LineScaleRandom';
import LineSpinFadeLoader from '../src/LineSpinFadeLoader';

const defaultColor = '#000000';
const defaultState = true;

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

animationsForStories.forEach((animation) => {
    const { name, component } = animation;
    stories.add(name, () => (<div style={style}>{ cloneElement(component, { color: color('Color', defaultColor), loading: boolean('Loading', defaultState) })}</div>));
});
