import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { Pacman } from '../../src';

const stylesheet = new StyleSheet();

describe('<Pacman>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<Pacman> Shallow', () => {
    const ui = (<Pacman loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<Pacman> Mount', () => {
    const ui = (<Pacman loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<Pacman> Render', () => {
    const ui = (<Pacman loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
