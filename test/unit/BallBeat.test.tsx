import React from 'react';
import { matchers } from '@emotion/jest';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import BallBeat from '../../src/BallBeat';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

describe('<BallBeat>', () => {
    afterEach(cleanup);

    test('BallBeat should match snapshot', () => {
        const { container } = render(<BallBeat loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('BallBeat should have default color', () => {
        const { getByTestId } = render(<BallBeat loading  />);
        expect(getByTestId("ball-beat-container").querySelector("div")).toHaveStyle(
            `background-color: ${PRIMARY_COLOR}`
        );
    });

    test('BallBeat should have given color', () => {
        const { getByTestId } = render(<BallBeat loading color="red" />);
        expect(getByTestId("ball-beat-container").querySelector("div")).toHaveStyle(
            "background-color: red"
        );
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
