import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';


import LineScaleRandom from '../../src/LineScaleRandom';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();
const mathCopy = Object.create(global.Math);

describe('<LineScaleRandom>', () => {
    beforeEach(() => {
        global.Math.random = () => 0.5;
    });

    afterEach(() => {
        global.Math = mathCopy;
        cleanup();
    });

    test('LineScaleRandom should match snapshot', () => {
        const { container } = render(<LineScaleRandom loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('LineScaleRandom should have default color', () => {
        const { container } = render(<LineScaleRandom loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('LineScaleRandom should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<LineScaleRandom color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('LineScaleRandom should have no children', () => {
        const { container } = render(<LineScaleRandom loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('LineScaleRandom should have three children', () => {
        const { container } = render(<LineScaleRandom loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(5);
    });
});
