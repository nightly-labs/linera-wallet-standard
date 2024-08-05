import {
  Wallet,
  WalletWithFeatures,
  WalletsEventsListeners,
  getWallets
} from '@wallet-standard/core'
import { MinimallyRequiredFeatures } from './features'
import { LineraWallet } from './wallet'

// These features are absolutely required for wallets to function in the Linera ecosystem.
// Eventually, as wallets have more consistent support of features, we may want to extend this list.
const REQUIRED_FEATURES: (keyof MinimallyRequiredFeatures)[] = [
  'linera:account',
  'linera:connect',
  'linera:disconnect',
  'linera:network',
  'linera:onAccountChange',
  'linera:onNetworkChange',
  'linera:signMessage'
]

export function isWalletWithRequiredFeatureSet<AdditionalFeatures extends Wallet['features']>(
  wallet: Wallet,
  additionalFeatures: (keyof AdditionalFeatures)[] = []
): wallet is WalletWithFeatures<MinimallyRequiredFeatures & AdditionalFeatures> {
  return [...REQUIRED_FEATURES, ...additionalFeatures].every(
    (feature) => feature in wallet.features
  )
}

/**
 * Helper function to get only Linera wallets
 * @returns Linera compatible wallets and `on` event to listen to wallets register event
 */
export function getLineraWallets(): {
  lineraWallets: LineraWallet[]
  on: <E extends keyof WalletsEventsListeners>(
    event: E,
    listener: WalletsEventsListeners[E]
  ) => () => void
} {
  const { get, on } = getWallets()
  const wallets = get()
  const lineraWallets: Wallet[] = []
  wallets.map((wallet: Wallet) => {
    const isLinera = isWalletWithRequiredFeatureSet(wallet)
    if (isLinera) {
      lineraWallets.push(wallet)
    }
  })
  return { lineraWallets: lineraWallets as LineraWallet[], on }
}
