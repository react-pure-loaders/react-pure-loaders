import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';


import SemiCircleSpin from '../../src/SemiCircleSpin';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<SemiCircleSpin>', () => {
    afterEach(cleanup);

    test('SemiCircleSpin should match snapshot', () => {
        const { container } = render(<SemiCircleSpin loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('SemiCircleSpin should have default color', () => {
        const { container } = render(<SemiCircleSpin loading={true}/>);

        expect(container.firstChild).toHaveStyleRule(
            'background-image',
            `linear-gradient(transparent 0%,transparent 70%,${PRIMARY_COLOR} 30%,${PRIMARY_COLOR} 100%)`,
            {
                target: '> div',
            },
        );
    });

    test('SemiCircleSpin should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<SemiCircleSpin color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule(
            'background-image',
            `linear-gradient(transparent 0%,transparent 70%,${color} 30%,${color} 100%)`,
            {
                target: '> div',
            },
        );
    });

    test('SemiCircleSpin should have no children', () => {
        const { container } = render(<SemiCircleSpin loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('SemiCircleSpin should have three children', () => {
        const { container } = render(<SemiCircleSpin loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(2);
    });
});
