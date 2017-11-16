import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { LineScaleParty } from '../../src';

const stylesheet = new StyleSheet();

describe('<LineScaleParty>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<LineScaleParty> Shallow', () => {
    const ui = (<LineScaleParty loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<LineScaleParty> Mount', () => {
    const ui = (<LineScaleParty loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<LineScaleParty> Render', () => {
    const ui = (<LineScaleParty loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
