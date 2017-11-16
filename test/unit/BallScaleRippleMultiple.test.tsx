import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallScaleRippleMultiple } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallScaleRippleMultiple>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallScaleRippleMultiple> Shallow', () => {
    const ui = (<BallScaleRippleMultiple loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallScaleRippleMultiple> Mount', () => {
    const ui = (<BallScaleRippleMultiple loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallScaleRippleMultiple> Render', () => {
    const ui = (<BallScaleRippleMultiple loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
