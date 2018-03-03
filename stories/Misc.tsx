import { color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { divStyle, loadersStyle, loaderStyle } from './styles';

import {
  CubeTransition,
  Pacman,
  SemiCircleSpin,
  SquareSpin,
  TriangleSkewSpin,
} from '../src/index';

const stories = storiesOf('Misc', module);

stories.addDecorator(withKnobs);

stories.add('Misc', () => {
  const selectedColor = color('Color', '#ffffff');

  return (
    <div style={divStyle}>
      <div style={loadersStyle}>
        <div style={loaderStyle}>
          <CubeTransition
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <Pacman
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <SemiCircleSpin
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <SquareSpin
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <TriangleSkewSpin
            color={selectedColor}
            loading={true}
          />
        </div>
      </div>
    </div>
  );
});
