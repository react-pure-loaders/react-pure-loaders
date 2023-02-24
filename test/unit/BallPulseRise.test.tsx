import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';


import BallPulseRise from '../../src/BallPulseRise';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallPulseRise>', () => {
    afterEach(cleanup);

    test('BallPulseRise should match snapshot', () => {
        const { container } = render(<BallPulseRise loading={true} />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test.skip('BallPulseRise should have default color', () => {
        const { container } = render(<BallPulseRise loading={true} />);

        expect(container.firstChild).toHaveStyleRule(
            'background-color',
            PRIMARY_COLOR,
            { target: '> div' },
        );
    });

    test.skip('BallPulseRise should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(
            <BallPulseRise color={color} loading={true} />,
        );

        expect(container.firstChild).toHaveStyleRule('background-color', color, {
            target: '> div',
        });
    });

    test('BallPulseRise should have no children', () => {
        const { container } = render(<BallPulseRise loading={false} />);

        expect(container.firstChild).toBeNull();
    });

    test('BallPulseRise should have three children', () => {
        const { container } = render(<BallPulseRise loading={true} />);

        expect(container.querySelectorAll('div')).toHaveLength(6);
    });
});
