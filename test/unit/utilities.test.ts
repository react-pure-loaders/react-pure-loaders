import * as utilities from '../../src/utilities';

describe('utilities', () => {
  test('utilities to match snapshot', () => {
    expect(utilities).toMatchSnapshot();
  });
});
