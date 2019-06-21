import React, { cloneElement } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, boolean } from '@storybook/addon-knobs';

import CubeTransition from '../src/CubeTransition';
import Pacman from '../src/Pacman';
import SemiCircleSpin from '../src/SemiCircleSpin';
import SquareSpin from '../src/SquareSpin';
import TriangleSkewSpin from '../src/TriangleSkewSpin';

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
        name: 'Cube Transition',
        component: <CubeTransition />,
    },
    {
        name: 'Pacman',
        component: <Pacman />,
    },
    {
        name: 'Semi Circle Spin',
        component: <SemiCircleSpin />,
    },
    {
        name: 'Square Spin',
        component: <SquareSpin />,
    },
    {
        name: 'Triangle Skew Spin',
        component: <TriangleSkewSpin />,
    },
];

const stories = storiesOf('Misc Loaders', module);

stories.addDecorator(withKnobs);

animationsForStories.forEach((animation) => {
    const { name, component } = animation;
    stories.add(name, () => (<div style={style}>{ cloneElement(component, { color: color('Color', defaultColor), loading: boolean('Loading', defaultState) }) }</div>));
});
