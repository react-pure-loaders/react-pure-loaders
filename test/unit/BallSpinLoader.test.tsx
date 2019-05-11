import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import BallSpinLoader from '../../src/BallSpinLoader';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallSpinLoader>', () => {
    afterEach(cleanup);

    test('BallSpinLoader should match snapshot', () => {
        const { container } = render(<BallSpinLoader loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallSpinLoader should have default color', () => {
        const { container } = render(<BallSpinLoader loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background', PRIMARY_COLOR, { target: '> div' });
    });

    test('BallSpinLoader should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallSpinLoader color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background', color, { target: '> div' });
    });

    test('BallSpinLoader should have no children', () => {
        const { container } = render(<BallSpinLoader loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallSpinLoader should have three children', () => {
        const { container } = render(<BallSpinLoader loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(9);
    });
});
