import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallClipRotateMultiple } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallClipRotateMultiple>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('shallow to match snapshot', () => {
    const ui = (<BallClipRotateMultiple loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('mount to match snapshot', () => {
    const ui = (<BallClipRotateMultiple loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('render to match snapshot', () => {
    const ui = (<BallClipRotateMultiple loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
