import * as Chance from 'chance';
import { shallow } from 'enzyme';
import * as React from 'react';

import { BallBeat } from '../../src';
import { getClassName, getCssValueByProperty } from '../utilities';

const chance = new Chance();

describe('<BallBeat>', () => {
  test('BallBeat should match snapshot', () => {
    const ui = (<BallBeat loading={true}/>);

    expect(shallow(ui)).toMatchSnapshot();
  });

  test('BallBeat should have three children', () => {
    const ui = (<BallBeat loading={true}/>);

    expect(shallow(ui).children()).toHaveLength(3);
  });

  test('BallBeat should have no children', () => {
    const ui = (<BallBeat loading={false}/>);

    expect(shallow(ui).children()).toHaveLength(0);
  });

  test('BallBeat should have default color', () => {
    const ui = (<BallBeat loading={true}/>);
    const className = getClassName(ui);

    const currentDisplayValue = getCssValueByProperty(className,'> div','background-color');
    expect(currentDisplayValue).toEqual('#ffffff');
  });

  test('BallBeat should have given color', () => {
    const color = chance.color();
    const ui = (<BallBeat color={color} loading={true}/>);
    const className = getClassName(ui);

    const currentDisplayValue = getCssValueByProperty(className,'> div','background-color');
    expect(currentDisplayValue).toEqual(color);
  });
});
