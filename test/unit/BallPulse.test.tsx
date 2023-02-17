import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';


import BallPulse from '../../src/BallPulse';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallPulse>', () => {
    afterEach(cleanup);

    test('BallPulse should match snapshot', () => {
        const { container } = render(<BallPulse loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallPulse should have default color', () => {
        const { container } = render(<BallPulse loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('BallPulse should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallPulse color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallPulse should have no children', () => {
        const { container } = render(<BallPulse loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallPulse should have three children', () => {
        const { container } = render(<BallPulse loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(4);
    });
});
