import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallBeat } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallBeat>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('shallow to match snapshot', () => {
    const ui = (<BallBeat loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('mount to match snapshot', () => {
    const ui = (<BallBeat loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('render to match snapshot', () => {
    const ui = (<BallBeat loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
