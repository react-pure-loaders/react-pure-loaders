import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';

import BallClipRotate from '../../src/BallClipRotate';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallClipRotate>', () => {
    afterEach(cleanup);

    test('BallClipRotate should match snapshot', () => {
        const { container } = render(<BallClipRotate loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallClipRotate should have default color', () => {
        const { container } = render(<BallClipRotate loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR);
    });

    test('BallClipRotate should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallClipRotate color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color);
    });

    test('BallClipRotate should have no children', () => {
        const { container } = render(<BallClipRotate loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallClipRotate should have three children', () => {
        const { container } = render(<BallClipRotate loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(2);
    });
});
