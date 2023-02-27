import React from 'react';
import Chance from 'chance';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import BallBeat from '../../src/BallBeat';
import { PRIMARY_COLOR } from '../../src/variables';

const chance = new Chance();

describe('<BallBeat>', () => {
    afterEach(cleanup);

    test('BallBeat should match snapshot', () => {
        const { container } = render(<BallBeat loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallBeat should have default color', () => {
        const { getByTestId } = render(<BallBeat loading={true}/>);
        const loader = getByTestId('ball-beat-container').querySelector("div");

        expect(loader)
        .toHaveStyle({
            backgroundColor: PRIMARY_COLOR,
          });
    });

    test('BallBeat should have given color', () => {
        const expectedColor = chance.color();
        const { getByTestId } = render(<BallBeat loading={true} color={expectedColor}/>);
        const loader = getByTestId('ball-beat-container').querySelector("div");

        expect(loader)
        .toHaveStyle({
            backgroundColor: expectedColor,
          });
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
