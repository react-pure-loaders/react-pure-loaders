import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { TriangleSkewSpin } from '../../src';

const stylesheet = new StyleSheet();

describe('<TriangleSkewSpin>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<TriangleSkewSpin> Shallow', () => {
    const ui = (<TriangleSkewSpin loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<TriangleSkewSpin> Mount', () => {
    const ui = (<TriangleSkewSpin loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<TriangleSkewSpin> Render', () => {
    const ui = (<TriangleSkewSpin loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
