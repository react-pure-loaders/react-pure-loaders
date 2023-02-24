import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';


import BallGridBeat from '../../src/BallGridBeat';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();
const mathCopy = Object.create(global.Math);

describe('<BallGridBeat>', () => {
    beforeEach(() => {
        global.Math.random = () => 0.5;
    });

    afterEach(() => {
        global.Math = mathCopy;
        cleanup();
    });

    test('BallGridBeat should match snapshot', () => {
        const { container } = render(<BallGridBeat loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test.skip('BallGridBeat should have default color', () => {
        const { container } = render(<BallGridBeat loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test.skip('BallGridBeat should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallGridBeat color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallGridBeat should have no children', () => {
        const { container } = render(<BallGridBeat loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallGridBeat should have three children', () => {
        const { container } = render(<BallGridBeat loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(10);
    });
});
