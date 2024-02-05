
export const NETWORK_WHITELIST: string[] = [];

const wei = (1 * 10) ** -18; // 1 wei = 10^-18 Ether

export const AbiTypeColors: Record<string, "gray" | "red" | "yellow" | "green" | "blue" | "purple" | "pink"> = {
  receive: 'green',
  event: 'yellow',
  function: 'gray',
  fallback: 'red',
  unknown: 'pink',
}
