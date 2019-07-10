import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TriangleSkewSpin from '../../src/TriangleSkewSpin';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<TriangleSkewSpin>', () => {
    afterEach(cleanup);

    test('TriangleSkewSpin should match snapshot', () => {
        const { container } = render(<TriangleSkewSpin loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('TriangleSkewSpin should have default color', () => {
        const { container } = render(<TriangleSkewSpin loading={true}/>);

        expect(container.firstChild).toHaveStyleRule(
            'border-bottom',
            `20px solid ${PRIMARY_COLOR}`,
            {
                target: '> div',
            },
        );
    });

    test('TriangleSkewSpin should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<TriangleSkewSpin color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule(
            'border-bottom',
            `20px solid ${color}`,
            {
                target: '> div',
            },
        );
    });

    test('TriangleSkewSpin should have no children', () => {
        const { container } = render(<TriangleSkewSpin loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('TriangleSkewSpin should have three children', () => {
        const { container } = render(<TriangleSkewSpin loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(2);
    });
});
