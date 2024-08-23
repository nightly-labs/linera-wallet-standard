import { Unsubscribe } from '../misc'

// Version of the feature
export type SubscribeChainVersion = '1.0.0'

// Name of the feature
export const SubscribeChainNamespace = 'linera:subscribeChain'

export interface SubscribeChainFeature {
  // Namespace for the feature
  [SubscribeChainNamespace]: {
    // Version of the feature API
    version: SubscribeChainVersion
    subscribeChain: SubscribeChainMethod
  }
}

export type SubscribeChainMethod = (callback: SubscribeChainInput) => Promise<SubscribeChainOutput>

export type SubscribeChainInput = (data: any) => void
export type SubscribeChainOutput = Unsubscribe
