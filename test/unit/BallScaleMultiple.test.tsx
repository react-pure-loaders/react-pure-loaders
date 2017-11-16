import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallScaleMultiple } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallScaleMultiple>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallScaleMultiple> Shallow', () => {
    const ui = (<BallScaleMultiple loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallScaleMultiple> Mount', () => {
    const ui = (<BallScaleMultiple loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallScaleMultiple> Render', () => {
    const ui = (<BallScaleMultiple loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
