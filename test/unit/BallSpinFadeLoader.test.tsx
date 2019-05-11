import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import BallSpinFadeLoader from '../../src/BallSpinFadeLoader';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallSpinFadeLoader>', () => {
    afterEach(cleanup);

    test('BallSpinFadeLoader should match snapshot', () => {
        const { container } = render(<BallSpinFadeLoader loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallSpinFadeLoader should have default color', () => {
        const { container } = render(<BallSpinFadeLoader loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('BallSpinFadeLoader should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallSpinFadeLoader color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallSpinFadeLoader should have no children', () => {
        const { container } = render(<BallSpinFadeLoader loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallSpinFadeLoader should have three children', () => {
        const { container } = render(<BallSpinFadeLoader loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(9);
    });
});
