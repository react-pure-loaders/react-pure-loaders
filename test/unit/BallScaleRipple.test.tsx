import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallScaleRipple } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallScaleRipple>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallScaleRipple> Shallow', () => {
    const ui = (<BallScaleRipple loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallScaleRipple> Mount', () => {
    const ui = (<BallScaleRipple loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallScaleRipple> Render', () => {
    const ui = (<BallScaleRipple loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
