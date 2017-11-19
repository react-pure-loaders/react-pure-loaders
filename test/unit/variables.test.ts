import * as variables from '../../src/variables';

describe('variables', () => {
  test('variables to match snapshot', () => {
    expect(variables).toMatchSnapshot();
  });
});
