import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BallClipRotateMultiple from '../../src/BallClipRotateMultiple';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<BallClipRotateMultiple>', () => {
    afterEach(cleanup);

    test('BallClipRotateMultiple should match snapshot', () => {
        const { container } = render(<BallClipRotateMultiple loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallClipRotateMultiple should have default color', () => {
        const { container } = render(<BallClipRotateMultiple loading={true}/>);

        expect(container.firstChild).toHaveStyleRule(
            'border',
            `2px solid ${PRIMARY_COLOR}`,
            {
                target: '> div',
            },
        );
        // TODO
        // expect(container.firstChild).toHaveStyleRule(
        //     'border-color',
        //     `${PRIMARY_COLOR} transparent ${PRIMARY_COLOR} transparent`,
        //     {
        //         target: '> div &:last-child',
        //     },
        // );
    });

    test('BallClipRotateMultiple should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<BallClipRotateMultiple color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule(
            'border',
            `2px solid ${color}`,
            {
                target: '> div',
            },
        );
        // TODO
        // expect(container.firstChild).toHaveStyleRule(
        //     'border-color',
        //     `${color} transparent ${color} transparent`,
        //     {
        //         target: '> div &:last-child',
        //     },
        // );
    });

    test('BallClipRotateMultiple should have no children', () => {
        const { container } = render(<BallClipRotateMultiple loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallClipRotateMultiple should have three children', () => {
        const { container } = render(<BallClipRotateMultiple loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(3);
    });
});
