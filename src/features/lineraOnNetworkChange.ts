import { NetworkInfo } from '../misc'

/** Version of the feature. */
export type LineraOnNetworkChangeVersion = '1.0.0'

/** Name of the feature. */
export const LineraOnNetworkChangeNamespace = 'linera:onNetworkChange'

export type LineraOnNetworkChangeFeature = {
  /** Namespace for the feature. */
  [LineraOnNetworkChangeNamespace]: {
    /** Version of the feature API. */
    version: LineraOnNetworkChangeVersion
    onNetworkChange: LineraOnNetworkChangeMethod
  }
}

export type LineraOnNetworkChangeMethod = (input: LineraOnNetworkChangeInput) => Promise<void>

export type LineraOnNetworkChangeInput = (newNetwork: NetworkInfo) => void
