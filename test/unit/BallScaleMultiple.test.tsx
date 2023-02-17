import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';


import BallScaleMultiple from '../../src/BallScaleMultiple';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallScaleMultiple>', () => {
    afterEach(cleanup);

    test('BallScaleMultiple should match snapshot', () => {
        const { container } = render(<BallScaleMultiple loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallScaleMultiple should have default color', () => {
        const { container } = render(<BallScaleMultiple loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('BallScaleMultiple should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallScaleMultiple color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallScaleMultiple should have no children', () => {
        const { container } = render(<BallScaleMultiple loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallScaleMultiple should have three children', () => {
        const { container } = render(<BallScaleMultiple loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(4);
    });
});
