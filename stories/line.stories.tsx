import React from 'react';
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
    justifyContent: 'center'
};

const Animation = ({children}) => <div style={style}>{children}</div>

storiesOf('Line Loaders', module)
    .addDecorator(withKnobs)
    .add('Scale', () => <Animation><LineScale color={color('Color', defaultColor)} loading={boolean('Loading', defaultState)} /></Animation>)
    .add('Scale Party', () => <Animation><LineScaleParty color={color('Color', defaultColor)} loading={boolean('Loading', defaultState)}/></Animation>)
    .add('Scale Pulse Out', () => <Animation><LineScalePulseOut color={color('Color', defaultColor)} loading={boolean('Loading', defaultState)} /></Animation>)
    .add('Scale Pulse Out Rapid', () => <Animation><LineScalePulseOutRapid color={color('Color', defaultColor)} loading={boolean('Loading', defaultState)} /></Animation>)
    .add('Scale Random', () => <Animation><LineScaleRandom color={color('Color', defaultColor)}  loading={boolean('Loading', defaultState)} /></Animation>)
    .add('Spin Fade Loader', () => <Animation><LineSpinFadeLoader color={color('Color', defaultColor)} loading={boolean('Loading', defaultState)} /></Animation>)
