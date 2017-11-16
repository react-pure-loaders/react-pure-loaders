import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallRotate } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallRotate>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallRotate> Shallow', () => {
    const ui = (<BallRotate loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallRotate> Mount', () => {
    const ui = (<BallRotate loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallRotate> Render', () => {
    const ui = (<BallRotate loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
