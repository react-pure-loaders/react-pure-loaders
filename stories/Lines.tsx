import { color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { divStyle, loadersStyle, loaderStyle } from './styles';

import {
  LineScale,
  LineScaleParty,
  LineScalePulseOut,
  LineScalePulseOutRapid,
  LineScaleRandom,
  LineSpinFadeLoader,
} from '../src/index';

const stories = storiesOf('Lines', module);

stories.addDecorator(withKnobs);

stories.add('Lines', () => {
  const selectedColor = color('Color', '#ffffff');

  return (
    <div style={divStyle}>
      <div style={loadersStyle}>
        <div style={loaderStyle}>
          <LineScale
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineScaleParty
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineScalePulseOut
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineScalePulseOutRapid
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineScaleRandom
            color={selectedColor}
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineSpinFadeLoader
            color={selectedColor}
            loading={true}
          />
        </div>
      </div>
    </div>
  );
});
