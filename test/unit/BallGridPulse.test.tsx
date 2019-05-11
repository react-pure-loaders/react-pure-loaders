import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import BallGridPulse from '../../src/BallGridPulse';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();
const mathCopy = Object.create(global.Math);

describe('<BallGridPulse>', () => {
    beforeEach(() => {
        global.Math.random = () => 0.5;
    });

    afterEach(() => {
        global.Math = mathCopy;
        cleanup();
    });

    test('BallGridPulse should match snapshot', () => {
        const { container } = render(<BallGridPulse loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallGridPulse should have default color', () => {
        const { container } = render(<BallGridPulse loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('BallGridPulse should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallGridPulse color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallGridPulse should have no children', () => {
        const { container } = render(<BallGridPulse loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallGridPulse should have three children', () => {
        const { container } = render(<BallGridPulse loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(10);
    });
});
