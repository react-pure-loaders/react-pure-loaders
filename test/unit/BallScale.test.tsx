import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallScale } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallScale>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallScale> Shallow', () => {
    const ui = (<BallScale loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallScale> Mount', () => {
    const ui = (<BallScale loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallScale> Render', () => {
    const ui = (<BallScale loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
