import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LineScalePulseOutRapid from '../../src/LineScalePulseOutRapid';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<LineScalePulseOutRapid>', () => {
    afterEach(cleanup);

    test('LineScalePulseOutRapid should match snapshot', () => {
        const { container } = render(<LineScalePulseOutRapid loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('LineScalePulseOutRapid should have default color', () => {
        const { container } = render(<LineScalePulseOutRapid loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('LineScalePulseOutRapid should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<LineScalePulseOutRapid color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('LineScalePulseOutRapid should have no children', () => {
        const { container } = render(<LineScalePulseOutRapid loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('LineScalePulseOutRapid should have three children', () => {
        const { container } = render(<LineScalePulseOutRapid loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(6);
    });
});
