import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallScaleRandom } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallScaleRandom>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallScaleRandom> Shallow', () => {
    const ui = (<BallScaleRandom loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallScaleRandom> Mount', () => {
    const ui = (<BallScaleRandom loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallScaleRandom> Render', () => {
    const ui = (<BallScaleRandom loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
