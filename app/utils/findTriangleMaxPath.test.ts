import { describe, test } from 'vitest';
import { findTriangleMaxPath as fn } from './findTriangleMaxPath';

const triangle: number[][] = [
  [5],
  [4, 6],
  [4, 6, 8],
  [0, 7, 1, 5],
  [8, 3, 1, 1, 2],
];

describe('findTriangleMaxPath', () => {
  test('basic case', ({ expect }) => {
    expect(fn(triangle)).toEqual({
      values: [5, 6, 6, 7, 3],
      path: [0, 1, 1, 1, 1],
      total: 27,
    });
  });

  test('single value', ({ expect }) => {
    expect(fn([[1]])).toEqual({
      values: [1],
      path: [0],
      total: 1,
    });
  });

  test('empty case', ({ expect }) => {
    expect(() => fn([])).toThrow();
  });
});
