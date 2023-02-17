import React from 'react';
import Chance from 'chance';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';


import Pacman from '../../src/Pacman';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<Pacman>', () => {
    afterEach(cleanup);

    test('Pacman should match snapshot', () => {
        const { container } = render(<Pacman loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('Pacman should have default color', () => {
        const { container } = render(<Pacman loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('Pacman should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<Pacman color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('Pacman should have no children', () => {
        const { container } = render(<Pacman loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('Pacman should have three children', () => {
        const { container } = render(<Pacman loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(6);
    });
});
