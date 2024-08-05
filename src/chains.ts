export type ChainsId = `${string}:${string}` // e.g. 'linera:devnet'

/** LINERA Devnet */
export const LINERA_DEVNET_CHAIN = 'linera:devnet'

/** LINERA Testnet */
export const LINERA_TESTNET_CHAIN = 'linera:testnet'

/** LINERA Localnet */
export const LINERA_LOCALNET_CHAIN = 'linera:localnet'

/** LINERA Mainnet */
export const LINERA_MAINNET_CHAIN = 'linera:mainnet'

export const LINERA_CHAINS = [
  LINERA_DEVNET_CHAIN,
  LINERA_TESTNET_CHAIN,
  LINERA_LOCALNET_CHAIN,
  LINERA_MAINNET_CHAIN
] as const

export type LineraChain =
  | typeof LINERA_DEVNET_CHAIN
  | typeof LINERA_TESTNET_CHAIN
  | typeof LINERA_LOCALNET_CHAIN
  | typeof LINERA_MAINNET_CHAIN