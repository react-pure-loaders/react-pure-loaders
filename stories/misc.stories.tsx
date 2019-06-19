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

storiesOf('Misc Loaders', module)
    .addDecorator(withKnobs)
    .add('Cube Transition', () => {
        return (
            <div style={style}>
                <CubeTransition
                    color={color('Color', defaultColor)}
                    loading={boolean('Loading', defaultState)}
                />
            </div>
        );
    })
    .add('Pacman', () => {
        return (
            <div style={style}>
                <Pacman
                    color={color('Color', defaultColor)}
                    loading={boolean('Loading', defaultState)}
                />
            </div>
        );
    })
    .add('Semi Circle Spin', () => {
        return (
            <div style={style}>
                <SemiCircleSpin
                    color={color('Color', defaultColor)}
                    loading={boolean('Loading', defaultState)}
                />
            </div>
        );
    })
    .add('Square Spin', () => {
        return (
            <div style={style}>
                <SquareSpin
                    color={color('Color', defaultColor)}
                    loading={boolean('Loading', defaultState)}
                />
            </div>
        );
    })
    .add('Triangle Skew Spin', () => {
        return (
            <div style={style}>
                <TriangleSkewSpin
                    color={color('Color', defaultColor)}
                    loading={boolean('Loading', defaultState)}
                />
            </div>
        );
    });
