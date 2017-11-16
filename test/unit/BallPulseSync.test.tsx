import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallPulseSync } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallPulseSync>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallPulseSync> Shallow', () => {
    const ui = (<BallPulseSync loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallPulseSync> Mount', () => {
    const ui = (<BallPulseSync loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallPulseSync> Render', () => {
    const ui = (<BallPulseSync loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
