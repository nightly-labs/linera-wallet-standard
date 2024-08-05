import type { IdentifierRecord, WalletWithFeatures } from '@wallet-standard/core'
import type { LineraSignAndSubmitTransactionFeature } from './lineraSignAndSubmitTransaction'
import { LineraSignMessageFeature } from './lineraSignMessage'
import { LineraGetAccountFeature } from './lineraGetAccount'
import { LineraConnectFeature } from './lineraConnect'
import { LineraGetNetworkFeature } from './lineraGetNetwork'
import { LineraOnAccountChangeFeature } from './lineraOnAccountChange'
import { LineraOnNetworkChangeFeature } from './lineraOnNetworkChange'
import { LineraDisconnectFeature } from './lineraDisconnect'
import { LineraChangeNetworkFeature } from './lineraChangeNetwork'

/**
 * Wallet Standard features that are unique to Linera, and that all Linera wallets are expected to implement.
 */
export type LineraFeatures = LineraConnectFeature &
  LineraGetAccountFeature &
  LineraGetNetworkFeature &
  LineraOnAccountChangeFeature &
  LineraOnNetworkChangeFeature &
  LineraSignMessageFeature &
  //LineraChangeNetworkFeature is optional
  Partial<LineraChangeNetworkFeature> &
  LineraSignAndSubmitTransactionFeature &
  LineraDisconnectFeature

/**
 * Represents a wallet with all Linera features.
 */
export type WalletWithLineraFeatures = WalletWithFeatures<LineraFeatures>

/**
 * Represents a wallet with the absolute minimum feature set required to function in the Linera ecosystem.
 */
export type WalletWithRequiredFeatures = WalletWithFeatures<
  MinimallyRequiredFeatures & IdentifierRecord<unknown>
>

/**
 * Represents the absolute minimum feature set required to function in the Linera ecosystem.
 */
export type MinimallyRequiredFeatures = LineraFeatures

export * from './lineraSignAndSubmitTransaction'
export * from './lineraSignMessage'
export * from './lineraGetAccount'
export * from './lineraConnect'
export * from './lineraGetNetwork'
export * from './lineraOnAccountChange'
export * from './lineraOnNetworkChange'
export * from './lineraChangeNetwork'
export * from './lineraDisconnect'
