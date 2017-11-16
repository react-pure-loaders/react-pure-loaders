import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallZigZagDeflect } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallZigZagDeflect>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallZigZagDeflect> Shallow', () => {
    const ui = (<BallZigZagDeflect loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallZigZagDeflect> Mount', () => {
    const ui = (<BallZigZagDeflect loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallZigZagDeflect> Render', () => {
    const ui = (<BallZigZagDeflect loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
