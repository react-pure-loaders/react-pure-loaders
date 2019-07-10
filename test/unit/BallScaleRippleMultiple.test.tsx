import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BallScaleRippleMultiple from '../../src/BallScaleRippleMultiple';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallScaleRippleMultiple>', () => {
    afterEach(cleanup);

    test('BallScaleRippleMultiple should match snapshot', () => {
        const { container } = render(<BallScaleRippleMultiple loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallScaleRippleMultiple should have default color', () => {
        const { container } = render(<BallScaleRippleMultiple loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('border', `2px solid ${PRIMARY_COLOR}`, { target: '> div' });
    });

    test('BallScaleRippleMultiple should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallScaleRippleMultiple color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('border', `2px solid ${color}`, { target: '> div' });
    });

    test('BallScaleRippleMultiple should have no children', () => {
        const { container } = render(<BallScaleRippleMultiple loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallScaleRippleMultiple should have three children', () => {
        const { container } = render(<BallScaleRippleMultiple loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(4);
    });
});
