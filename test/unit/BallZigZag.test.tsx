import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';


import BallZigZag from '../../src/BallZigZag';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallZigZag>', () => {
    afterEach(cleanup);

    test('BallZigZag should match snapshot', () => {
        const { container } = render(<BallZigZag loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test.skip('BallZigZag should have default color', () => {
        const { container } = render(<BallZigZag loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test.skip('BallZigZag should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallZigZag color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallZigZag should have no children', () => {
        const { container } = render(<BallZigZag loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallZigZag should have three children', () => {
        const { container } = render(<BallZigZag loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(3);
    });
});
