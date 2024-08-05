import { NetworkInfo } from '../misc'

/** Version of the feature. */
export type LineraGetNetworkVersion = '1.0.0'

/** Name of the feature. */
export const LineraGetNetworkNamespace = 'linera:network'

export type LineraGetNetworkFeature = {
  /** Namespace for the feature. */
  [LineraGetNetworkNamespace]: {
    /** Version of the feature API. */
    version: LineraGetNetworkVersion
    network: LineraGetNetworkMethod
  }
}

export type LineraGetNetworkMethod = () => Promise<LineraGetNetworkOutput>

export type LineraGetNetworkOutput = NetworkInfo
