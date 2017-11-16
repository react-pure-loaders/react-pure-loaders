import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { SquareSpin } from '../../src';

const stylesheet = new StyleSheet();

describe('<SquareSpin>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<SquareSpin> Shallow', () => {
    const ui = (<SquareSpin loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<SquareSpin> Mount', () => {
    const ui = (<SquareSpin loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<SquareSpin> Render', () => {
    const ui = (<SquareSpin loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
