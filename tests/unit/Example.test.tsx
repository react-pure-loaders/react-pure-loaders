import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Example } from '../../src/Example';

describe('<Example>', () => {
  test('Example component should match snapshot', () => {
    const wrapper = shallow(<Example/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});