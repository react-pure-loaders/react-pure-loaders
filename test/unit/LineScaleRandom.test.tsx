import { mount, render, shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';
import { StyleSheet } from 'glamor/lib/sheet';
import * as React from 'react';
import { LineScaleRandom } from '../../src';

const stylesheet = new StyleSheet();

describe('<LineScaleRandom>', () => {
  beforeEach(() => {
    stylesheet.flush();
  });

  test('<LineScaleRandom> Shallow', () => {
    // const wrapper = render(<LineScaleRandom loading={true}/>);
    //
    // expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });
  test('<LineScaleRandom> Mount', () => {
    // const ui = (<LineScaleRandom loading={true}/>);
    //
    // expect(enzymeToJson(mount(ui))).toMatchSnapshot();
  });
  test('<LineScaleRandom> Render', () => {
    // const ui = (<LineScaleRandom loading={true}/>);
    //
    // expect(enzymeToJson(render(ui))).toMatchSnapshot();
  });
});
