import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallZigZag } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallZigZag>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallZigZag> Shallow', () => {
    const ui = (<BallZigZag loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallZigZag> Mount', () => {
    const ui = (<BallZigZag loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallZigZag> Render', () => {
    const ui = (<BallZigZag loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
