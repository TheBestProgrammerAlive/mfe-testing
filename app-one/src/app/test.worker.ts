/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = fibonacci(data)
  postMessage(response);
});

function fibonacci(num: number): number {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
