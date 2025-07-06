export function getDriftData(points = 20): number[] {
  const data: number[] = [];
  let last = 0;
  for (let i = 0; i < points; i++) {
    last += (Math.random() - 0.5);
    data.push(parseFloat(last.toFixed(2)));
  }
  return data;
}

export function analyzeTraits() {
  return {
    volatility: Math.random().toFixed(2),
    momentum: Math.random().toFixed(2),
  };
}
