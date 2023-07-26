interface IResult {
  total: number;
  path: number[];
  values: number[];
}

export const findTriangleMaxPath = (triangle: number[][]): IResult => {
  const rows = triangle.length;

  if (!rows) {
    throw Error('Expecting at least one element.');
  }

  const dp: IResult[][] = new Array(rows);

  for (let col = 0; col < triangle[rows - 1].length; col++) {
    dp[rows - 1] ||= [];
    dp[rows - 1][col] = {
      total: triangle[rows - 1][col],
      path: [col],
      values: [triangle[rows - 1][col]],
    };
  }

  for (let row = rows - 2; row >= 0; row--) {
    for (let col = 0; col < triangle[row].length; col++) {
      const leftChildValue = dp[row + 1][col].total;
      const rightChildValue = dp[row + 1][col + 1].total;
      const currentValue = triangle[row][col];

      if (leftChildValue > rightChildValue) {
        dp[row] ||= [];
        dp[row][col] = {
          total: currentValue + leftChildValue,
          path: [col, ...dp[row + 1][col].path],
          values: [currentValue, ...dp[row + 1][col].values],
        };
      } else {
        dp[row] ||= [];
        dp[row][col] = {
          total: currentValue + rightChildValue,
          path: [col, ...dp[row + 1][col + 1].path],
          values: [currentValue, ...dp[row + 1][col + 1].values],
        };
      }
    }
  }

  return dp[0][0];
};
