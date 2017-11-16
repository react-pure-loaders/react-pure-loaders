import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallSpinFadeLoader } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallSpinFadeLoader>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallSpinFadeLoader> Shallow', () => {
    const ui = (<BallSpinFadeLoader loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallSpinFadeLoader> Mount', () => {
    const ui = (<BallSpinFadeLoader loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallSpinFadeLoader> Render', () => {
    const ui = (<BallSpinFadeLoader loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
