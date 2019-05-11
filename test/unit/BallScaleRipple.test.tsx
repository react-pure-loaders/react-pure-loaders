import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import BallScaleRipple from '../../src/BallScaleRipple';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallScaleRipple>', () => {
    afterEach(cleanup);

    test('BallScaleRipple should match snapshot', () => {
        const { container } = render(<BallScaleRipple loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallScaleRipple should have default color', () => {
        const { container } = render(<BallScaleRipple loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('border', `2px solid ${PRIMARY_COLOR}`, { target: '> div' });
    });

    test('BallScaleRipple should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallScaleRipple color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('border', `2px solid ${color}`, { target: '> div' });
    });

    test('BallScaleRipple should have no children', () => {
        const { container } = render(<BallScaleRipple loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallScaleRipple should have three children', () => {
        const { container } = render(<BallScaleRipple loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(2);
    });
});
