import React from 'react';
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
    justifyContent: 'center'
};

const Animation = ({children}) => <div style={style}>{children}</div>

storiesOf('Misc Loaders', module)
    .addDecorator(withKnobs)
    .add('Cube Transition', () => <Animation><CubeTransition color={color('Color', defaultColor)} loading={boolean('Loading', defaultState)} /></Animation>)
    .add('Pacman', () => <Animation><Pacman color={color('Color', defaultColor)} loading={boolean('Loading', defaultState)} /></Animation>)
    .add('Semi Circle Spin', () => <Animation><SemiCircleSpin color={color('Color', defaultColor)} loading={boolean('Loading', defaultState)} /></Animation>)
    .add('Square Spin', () => <Animation><SquareSpin color={color('Color', defaultColor)} loading={boolean('Loading', defaultState)} /></Animation>)
    .add('Triangle Skew Spin', () =><Animation><TriangleSkewSpin color={color('Color', defaultColor)} loading={boolean('Loading', defaultState)} /></Animation>)
