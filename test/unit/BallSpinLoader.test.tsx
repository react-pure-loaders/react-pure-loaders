import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallSpinLoader } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallSpinLoader>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallSpinLoader> Shallow', () => {
    const ui = (<BallSpinLoader loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallSpinLoader> Mount', () => {
    const ui = (<BallSpinLoader loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallSpinLoader> Render', () => {
    const ui = (<BallSpinLoader loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
