import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallPulseRise } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallPulseRise>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallPulseRise> Shallow', () => {
    const ui = (<BallPulseRise loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallPulseRise> Mount', () => {
    const ui = (<BallPulseRise loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallPulseRise> Render', () => {
    const ui = (<BallPulseRise loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
