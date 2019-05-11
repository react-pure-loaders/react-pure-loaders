import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import BallClipRotatePulse from '../../src/BallClipRotatePulse';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallClipRotatePulse>', () => {
    afterEach(cleanup);

    test('BallClipRotatePulse should match snapshot', () => {
        const { container } = render(<BallClipRotatePulse loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallClipRotatePulse should have default color', () => {
        const { container } = render(<BallClipRotatePulse loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('BallClipRotatePulse should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallClipRotatePulse color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallClipRotatePulse should have no children', () => {
        const { container } = render(<BallClipRotatePulse loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallClipRotatePulse should have three children', () => {
        const { container } = render(<BallClipRotatePulse loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(3);
    });
});
