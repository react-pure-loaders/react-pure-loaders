import * as mixins from '../../src/mixins';

describe('mixins', () => {
  test('mixins to match snapshot', () => {
    expect(mixins).toMatchSnapshot();
  });
});
