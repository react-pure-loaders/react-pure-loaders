import { mount, render, shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { BallGridBeat } from '../../src';

const stylesheet = new StyleSheet();

describe('<BallGridBeat>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<BallGridBeat> Shallow', () => {
    // const ui = (<BallGridBeat loading={true}/>);
    //
    // expect(enzymeToJson(shallow(ui))).toMatchSnapshot(`enzyme.shallow`);
  });
  test('<BallGridBeat> Mount', () => {
    // const ui = (<BallGridBeat loading={true}/>);
    //
    // expect(enzymeToJson(mount(ui))).toMatchSnapshot(`enzyme.mount`);
  });
  test('<BallGridBeat> Render', () => {
    // const ui = (<BallGridBeat loading={true}/>);
    //
    // expect(enzymeToJson(render(ui))).toMatchSnapshot(`enzyme.render`);
  });
});
