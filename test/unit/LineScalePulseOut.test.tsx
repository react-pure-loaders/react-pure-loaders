import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';


import LineScalePulseOut from '../../src/LineScalePulseOut';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<LineScalePulseOut>', () => {
    afterEach(cleanup);

    test('LineScalePulseOut should match snapshot', () => {
        const { container } = render(<LineScalePulseOut loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('LineScalePulseOut should have default color', () => {
        const { container } = render(<LineScalePulseOut loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('LineScalePulseOut should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<LineScalePulseOut color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('LineScalePulseOut should have no children', () => {
        const { container } = render(<LineScalePulseOut loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('LineScalePulseOut should have three children', () => {
        const { container } = render(<LineScalePulseOut loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(6);
    });
});
