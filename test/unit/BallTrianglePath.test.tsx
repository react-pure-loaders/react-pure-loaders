import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';


import BallTrianglePath from '../../src/BallTrianglePath';
import { PRIMARY_COLOR } from '../../src/variables';


expect.extend(matchers);

const chance = new Chance();

describe('<BallTrianglePath>', () => {
    afterEach(cleanup);

    test('BallTrianglePath should match snapshot', () => {
        const { container } = render(<BallTrianglePath loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test.skip('BallTrianglePath should have default color', () => {
        const { container } = render(<BallTrianglePath loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test.skip('BallTrianglePath should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallTrianglePath color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallTrianglePath should have no children', () => {
        const { container } = render(<BallTrianglePath loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallTrianglePath should have three children', () => {
        const { container } = render(<BallTrianglePath loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(4);
    });
});
