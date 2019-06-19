import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import LineScaleParty from '../../src/LineScaleParty';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<LineScaleParty>', () => {
    afterEach(cleanup);

    test('LineScaleParty should match snapshot', () => {
        const { container } = render(<LineScaleParty loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('LineScaleParty should have default color', () => {
        const { container } = render(<LineScaleParty loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('LineScaleParty should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<LineScaleParty color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('LineScaleParty should have no children', () => {
        const { container } = render(<LineScaleParty loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('LineScaleParty should have three children', () => {
        const { container } = render(<LineScaleParty loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(4);
    });
});
