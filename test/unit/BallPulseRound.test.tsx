import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import BallPulseRound from '../../src/BallPulseRound';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallPulseRound>', () => {
    afterEach(cleanup);

    test('BallPulseRound should match snapshot', () => {
        const { container } = render(<BallPulseRound loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallPulseRound should have default color', () => {
        const { container } = render(<BallPulseRound loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('BallPulseRound should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallPulseRound color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallPulseRound should have no children', () => {
        const { container } = render(<BallPulseRound loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallPulseRound should have three children', () => {
        const { container } = render(<BallPulseRound loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(2);
    });
});
