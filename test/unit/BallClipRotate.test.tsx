import React from 'react';
import Chance from 'chance';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import BallClipRotate from '../../src/BallClipRotate';
import { PRIMARY_COLOR } from '../../src/variables';

const chance = new Chance();

describe('<BallClipRotate>', () => {
    afterEach(cleanup);

    test('BallClipRotate should match snapshot', () => {
        const { container } = render(<BallClipRotate loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallClipRotate should have default color', () => {
        const { getByTestId } = render(<BallClipRotate loading={true}  />);
        const loader = getByTestId('ball-clip-rotate-container').querySelector("div")

        expect(loader)
        .toHaveStyle({
            backgroundColor: PRIMARY_COLOR,
          });
    });

    test('BallClipRotate should have given color', () => {
        const expectedColor = chance.color({ format: 'hex' });
        const { getByTestId } = render(<BallClipRotate loading={true} color={expectedColor}/>);
        const loader = getByTestId('ball-clip-rotate-container').querySelector("div")

        expect(loader)
        .toHaveStyle({
            backgroundColor: expectedColor,
          });
    });

    test('BallClipRotate should have no children', () => {
        const { container } = render(<BallClipRotate loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('BallClipRotate should have three children', () => {
        const { container } = render(<BallClipRotate loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(2);
    });
});
