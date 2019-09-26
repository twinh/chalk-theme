import theme from '..';
import stripAnsi from 'strip-ansi';

describe('cli theme', () => {
  it('info theme', () => {
    expect(stripAnsi(theme.info('1'))).toBe('1');
  });

  it('warning theme', () => {
    expect(stripAnsi(theme.warning('1'))).toBe('1');
  });

  it('error theme', () => {
    expect(stripAnsi(theme.error('1'))).toBe('1');
  });
});
