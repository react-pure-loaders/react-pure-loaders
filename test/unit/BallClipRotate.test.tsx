import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallClipRotate } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallClipRotate>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('shallow to match snapshot', () => {
    const ui = (<BallClipRotate loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('mount to match snapshot', () => {
    const ui = (<BallClipRotate loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('render to match snapshot', () => {
    const ui = (<BallClipRotate loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
