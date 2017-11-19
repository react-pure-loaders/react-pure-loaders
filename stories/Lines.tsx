import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { divStyle, loadersStyle, loaderStyle } from './styles';
// import { action } from '@storybook/addon-actions';
// import { withKnobs } from '@storybook/addon-knobs';

import {
  LineScale,
  LineScaleParty,
  LineScalePulseOut,
  LineScalePulseOutRapid,
  LineScaleRandom,
  LineSpinFadeLoader,
} from '../src/index'

const stories = storiesOf('Lines', module);

// stories.addDecorator(withKnobs);

stories.add('Lines', () => {
  return (
    <div style={divStyle}>
      <div style={loadersStyle}>
        <div style={loaderStyle}>
          <LineScale
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineScaleParty
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineScalePulseOut
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineScalePulseOutRapid
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineScaleRandom
            loading={true}
          />
        </div>
        <div style={loaderStyle}>
          <LineSpinFadeLoader
            loading={true}
          />
        </div>
      </div>
    </div>
  );
});
