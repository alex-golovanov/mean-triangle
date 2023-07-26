import { describe, test } from 'vitest';
import { parseTriangleText as fn } from './parseTriangleText';

// prettier-ignore
const text = 
`9235 
9096 637 
973 3269 7039 `;

describe('parseTriangleText', () => {
  test('basic case', ({ expect }) => {
    expect(fn(text)).toEqual([[9235], [9096, 637], [973, 3269, 7039]]);
  });

  test('empty case', ({ expect }) => {
    expect(fn('')).toEqual(null);
  });
});
