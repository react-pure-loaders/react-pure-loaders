import React, { cloneElement } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import CubeTransition from '../src/CubeTransition';
import Pacman from '../src/Pacman';
import SemiCircleSpin from '../src/SemiCircleSpin';
import SquareSpin from '../src/SquareSpin';
import TriangleSkewSpin from '../src/TriangleSkewSpin';

import createStories from '../utils/createStories';

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

createStories(animationsForStories, stories);
