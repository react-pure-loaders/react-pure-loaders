import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';


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

    test.skip('LineScalePulseOutRapid should have default color', () => {
        const { container } = render(<LineScalePulseOutRapid loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test.skip('LineScalePulseOutRapid should have given color', () => {
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
