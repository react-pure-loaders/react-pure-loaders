import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BallZigZagDeflect from '../../src/BallZigZagDeflect';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallZigZagDeflect>', () => {
    afterEach(cleanup);

    test('BallZigZagDeflect should match snapshot', () => {
        const { container } = render(<BallZigZagDeflect loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallZigZagDeflect should have default color', () => {
        const { container } = render(<BallZigZagDeflect loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('BallZigZagDeflect should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallZigZagDeflect color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallZigZagDeflect should have no children', () => {
        const { container } = render(<BallZigZagDeflect loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallZigZagDeflect should have three children', () => {
        const { container } = render(<BallZigZagDeflect loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(3);
    });
});
