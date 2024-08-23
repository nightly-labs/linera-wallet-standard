export type TransactionHash = `0x${string}`
export type ChainId = string
export type Unsubscribe = () => void
export enum Network {
  MAINNET = 'mainnet',
  TESTNET = 'testnet',
  DEVNET = 'devnet',
  LOCAL = 'local',
  CUSTOM = 'custom'
}
export interface NetworkInfo {
  name: Network // Name of the network.
  chainId: number // Chain ID of the network.
  url?: string // RPC URL of the network. Required for custom networks.
}
