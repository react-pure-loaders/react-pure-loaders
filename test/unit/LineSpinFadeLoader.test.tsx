import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import LineSpinFadeLoader from '../../src/LineSpinFadeLoader';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<LineSpinFadeLoader>', () => {
    afterEach(cleanup);

    test('LineSpinFadeLoader should match snapshot', () => {
        const { container } = render(<LineSpinFadeLoader loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('LineSpinFadeLoader should have default color', () => {
        const { container } = render(<LineSpinFadeLoader loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('LineSpinFadeLoader should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<LineSpinFadeLoader color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('LineSpinFadeLoader should have no children', () => {
        const { container } = render(<LineSpinFadeLoader loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('LineSpinFadeLoader should have three children', () => {
        const { container } = render(<LineSpinFadeLoader loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(9);
    });
});
