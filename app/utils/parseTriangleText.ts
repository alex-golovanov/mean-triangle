export const parseTriangleText = (text: string): number[][] | null => {
  if (!text.length) {
    return null;
  }

  const res = [];
  for (const line of text.split('\n')) {
    res.push(line.trim().split(' ').map(Number));
  }

  return res;
};
