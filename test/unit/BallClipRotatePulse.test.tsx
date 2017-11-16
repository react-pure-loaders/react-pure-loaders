import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallClipRotatePulse } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallClipRotatePulse>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('shallow to match snapshot', () => {
    const ui = (<BallClipRotatePulse loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('mount to match snapshot', () => {
    const ui = (<BallClipRotatePulse loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('render to match snapshot', () => {
    const ui = (<BallClipRotatePulse loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
