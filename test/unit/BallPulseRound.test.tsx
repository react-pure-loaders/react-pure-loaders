import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallPulseRound } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallPulseRound>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallPulseRound> Shallow', () => {
    const ui = (<BallPulseRound loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallPulseRound> Mount', () => {
    const ui = (<BallPulseRound loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallPulseRound> Render', () => {
    const ui = (<BallPulseRound loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
