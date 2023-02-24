import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';


import BallScaleRandom from '../../src/BallScaleRandom';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallScaleRandom>', () => {
    afterEach(cleanup);

    test('BallScaleRandom should match snapshot', () => {
        const { container } = render(<BallScaleRandom loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test.skip('BallScaleRandom should have default color', () => {
        const { container } = render(<BallScaleRandom loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test.skip('BallScaleRandom should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallScaleRandom color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallScaleRandom should have no children', () => {
        const { container } = render(<BallScaleRandom loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallScaleRandom should have three children', () => {
        const { container } = render(<BallScaleRandom loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(4);
    });
});
