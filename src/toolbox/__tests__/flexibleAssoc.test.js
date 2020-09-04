import flexibleAssoc from '../flexibleAssoc';

describe('toolbox/flexibleAssoc', () => {
  test('should return an assocPath(key)', () => {
    const returnValue = flexibleAssoc(['abc', '123']);
    expect(returnValue('value', {})).toEqual({
      abc: {
        123: 'value',
      },
    });
  });
  test('should return an assoc(key)', () => {
    const returnValue = flexibleAssoc('abc');
    expect(returnValue('value', {})).toEqual({
      abc: 'value',
    });
  });
});
