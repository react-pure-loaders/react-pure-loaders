import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallBeat } from '../../src';

const stylesheet = new StyleSheet();

describe('Style test', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallBeat> Shallow', () => {
    const ui = (<BallBeat loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallBeat> Mount', () => {
    const ui = (<BallBeat loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallBeat> Render', () => {
    const ui = (<BallBeat loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
