import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallPulse } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallPulse>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallPulse> Shallow', () => {
    const ui = (<BallPulse loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallPulse> Mount', () => {
    const ui = (<BallPulse loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallPulse> Render', () => {
    const ui = (<BallPulse loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
