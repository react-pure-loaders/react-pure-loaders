import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CubeTransition from '../../src/CubeTransition';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<CubeTransition>', () => {
    afterEach(cleanup);

    test('CubeTransition should match snapshot', () => {
        const { container } = render(<CubeTransition loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('CubeTransition should have default color', () => {
        const { container } = render(<CubeTransition loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('CubeTransition should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<CubeTransition color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('CubeTransition should have no children', () => {
        const { container } = render(<CubeTransition loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('CubeTransition should have three children', () => {
        const { container } = render(<CubeTransition loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(3);
    });
});
