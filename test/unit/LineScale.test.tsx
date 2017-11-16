import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { LineScale } from '../../src';

const stylesheet = new StyleSheet();

describe('<LineScale>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<LineScale> Shallow', () => {
    const ui = (<LineScale loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<LineScale> Mount', () => {
    const ui = (<LineScale loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<LineScale> Render', () => {
    const ui = (<LineScale loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
