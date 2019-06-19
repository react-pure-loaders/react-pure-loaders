import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import BallRotate from '../../src/BallRotate';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallRotate>', () => {
    afterEach(cleanup);

    test('BallRotate should match snapshot', () => {
        const { container } = render(<BallRotate loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallRotate should have default color', () => {
        const { container } = render(<BallRotate loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('BallRotate should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallRotate color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallRotate should have no children', () => {
        const { container } = render(<BallRotate loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallRotate should have three children', () => {
        const { container } = render(<BallRotate loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(2);
    });
});
