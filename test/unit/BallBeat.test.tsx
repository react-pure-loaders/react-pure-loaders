import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'

import BallBeat from '../../src/BallBeat';
// import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallBeat>', () => {
    afterEach(cleanup);

    test('BallBeat should match snapshot', () => {
        const { container } = render(<BallBeat loading={true}/>);


        expect(container.firstChild).toMatchSnapshot();
    });

    test.skip('BallBeat should have default color', () => {
        const { container } = render(<BallBeat loading={true}/>);

        console.log(container.firstChild);

        expect(container.firstChild).toHaveStyleRule('height', 15);
    });

    test.skip('BallBeat should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallBeat color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('BallBeat should have no children', () => {
        const { container } = render(<BallBeat loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallBeat should have three children', () => {
        const { container } = render(<BallBeat loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(4);
    });
});
