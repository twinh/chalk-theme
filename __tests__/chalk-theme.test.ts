import style from '..';

describe('cli style', () => {
  it('info style', () => {
    expect(style.info('1')).toBe('[32m1[39m');
  });

  it('warning style', () => {
    expect(style.warning('1')).toBe('[33m1[39m');
  });

  it('error style', () => {
    expect(style.error('1')).toBe('[31m1[39m');
  });
});
