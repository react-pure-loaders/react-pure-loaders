import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import BallScale from '../../src/BallScale';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallScale>', () => {
    afterEach(cleanup);

    test('BallScale should match snapshot', () => {
        const { container } = render(<BallScale loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallScale should have default color', () => {
        const { container } = render(<BallScale loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('BallScale should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallScale color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallScale should have no children', () => {
        const { container } = render(<BallScale loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallScale should have three children', () => {
        const { container } = render(<BallScale loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(2);
    });
});
