import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import SquareSpin from '../../src/SquareSpin';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<SquareSpin>', () => {
    afterEach(cleanup);

    test('SquareSpin should match snapshot', () => {
        const { container } = render(<SquareSpin loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('SquareSpin should have default color', () => {
        const { container } = render(<SquareSpin loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background', PRIMARY_COLOR, { target: '> div' });
    });

    test('SquareSpin should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<SquareSpin color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background', color, { target: '> div' });
    });

    test('SquareSpin should have no children', () => {
        const { container } = render(<SquareSpin loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('SquareSpin should have three children', () => {
        const { container } = render(<SquareSpin loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(2);
    });
});
