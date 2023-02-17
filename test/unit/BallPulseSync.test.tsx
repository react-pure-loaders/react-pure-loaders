import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';


import BallPulseSync from '../../src/BallPulseSync';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallPulseSync>', () => {
    afterEach(cleanup);

    test('BallPulseSync should match snapshot', () => {
        const { container } = render(<BallPulseSync loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallPulseSync should have default color', () => {
        const { container } = render(<BallPulseSync loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('BallPulseSync should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallPulseSync color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallPulseSync should have no children', () => {
        const { container } = render(<BallPulseSync loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallPulseSync should have three children', () => {
        const { container } = render(<BallPulseSync loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(4);
    });
});
