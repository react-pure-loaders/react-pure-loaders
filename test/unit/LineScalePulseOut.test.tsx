import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { LineScalePulseOut } from '../../src';

const stylesheet = new StyleSheet();

describe('<LineScalePulseOut>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<LineScalePulseOut> Shallow', () => {
    const ui = (<LineScalePulseOut loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<LineScalePulseOut> Mount', () => {
    const ui = (<LineScalePulseOut loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<LineScalePulseOut> Render', () => {
    const ui = (<LineScalePulseOut loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
