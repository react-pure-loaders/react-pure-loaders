import { mount, render, shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json'
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallGridPulse } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallGridPulse>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallGridPulse> Shallow', () => {
    // const ui = (<BallGridPulse loading={true}/>);
    //
    // expect(enzymeToJson(shallow(ui))).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallGridPulse> Mount', () => {
    // const ui = (<BallGridPulse loading={true}/>);
    //
    // expect(enzymeToJson(mount(ui))).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallGridPulse> Render', () => {
    // const ui = (<BallGridPulse loading={true}/>);
    //
    // expect(enzymeToJson(render(ui))).toMatchSnapshot(`enzyme.render`);
  });
});
