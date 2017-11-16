import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallTrianglePath } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallTrianglePath>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallTrianglePath> Shallow', () => {
    const ui = (<BallTrianglePath loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallTrianglePath> Mount', () => {
    const ui = (<BallTrianglePath loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallTrianglePath> Render', () => {
    const ui = (<BallTrianglePath loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
