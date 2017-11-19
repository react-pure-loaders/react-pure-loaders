import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { divStyle, loadersStyle, loaderStyle } from './styles';

// import { action } from '@storybook/addon-actions';
// import { withKnobs } from '@storybook/addon-knobs';

import {
  CubeTransition,
  Pacman,
  SemiCircleSpin,
  SquareSpin,
  TriangleSkewSpin,
} from '../src/index'

const stories = storiesOf('Misc', module);

// stories.addDecorator(withKnobs);

stories.add('Misc', () => {
  return (
    <div style={divStyle}>
      <div style={loadersStyle}>
        <div style={loaderStyle}>
          <CubeTransition
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <Pacman
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <SemiCircleSpin
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <SquareSpin
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <TriangleSkewSpin
            loading={true}
          />
        </div>
      </div>
    </div>
  );
});
