export function add(...args: number[]): number {
  return args.reduce((curr, acc) => curr + acc, 0);
}
