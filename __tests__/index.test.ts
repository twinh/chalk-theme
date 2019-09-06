import theme from '..';

describe('cli theme', () => {
  it('info theme', () => {
    expect(theme.info('1')).toBe('[32m1[39m');
  });

  it('warning theme', () => {
    expect(theme.warning('1')).toBe('[33m1[39m');
  });

  it('error theme', () => {
    expect(theme.error('1')).toBe('[31m1[39m');
  });
});
