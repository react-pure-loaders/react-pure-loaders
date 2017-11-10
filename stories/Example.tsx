import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import { Example } from '../src/Example'

const stories = storiesOf('Example', module);

const divWrapperStyle: object = {
  fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
  fontWeight: 'normal',
  lineHeight: '1.5',
  color: '#0a0a0a',
  MozOsxFontSmoothing: 'grayscale',
};

stories.addDecorator(withKnobs);

stories.add('Basics', () => {
  return (
    <div style={divWrapperStyle}>
      <Example/>
    </div>
  );
});
