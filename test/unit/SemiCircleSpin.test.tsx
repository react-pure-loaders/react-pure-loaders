import { mount, render, shallow } from 'enzyme';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { SemiCircleSpin } from '../../src';

const stylesheet = new StyleSheet();

describe('<SemiCircleSpin>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<SemiCircleSpin> Shallow', () => {
    const ui = (<SemiCircleSpin loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<SemiCircleSpin> Mount', () => {
    const ui = (<SemiCircleSpin loading={true}/>);

    expect(mount(ui)).toMatchSnapshot(`enzyme.mount`);
  });
  test('<SemiCircleSpin> Render', () => {
    const ui = (<SemiCircleSpin loading={true}/>);

    expect(render(ui)).toMatchSnapshot(`enzyme.render`);
  });
});
