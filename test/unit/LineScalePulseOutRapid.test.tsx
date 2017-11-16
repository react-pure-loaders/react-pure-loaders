import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { LineScalePulseOutRapid } from '../../src';

const stylesheet = new StyleSheet();

describe('<LineScalePulseOutRapid>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<LineScalePulseOutRapid> Shallow', () => {
    const ui = (<LineScalePulseOutRapid loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<LineScalePulseOutRapid> Mount', () => {
    const ui = (<LineScalePulseOutRapid loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<LineScalePulseOutRapid> Render', () => {
    const ui = (<LineScalePulseOutRapid loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
