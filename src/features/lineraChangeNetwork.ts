import { NetworkInfo } from '../misc'

/** Version of the feature. */
export type LineraChangeNetworkVersion = '1.0.0'

/** Name of the feature. */
export const LineraChangeNetworkNamespace = 'linera:changeNetwork'

export type LineraChangeNetworkFeature = {
  /** Namespace for the feature. */
  [LineraChangeNetworkNamespace]: {
    /** Version of the feature API. */
    version: LineraChangeNetworkVersion
    changeNetwork: LineraChangeNetworkMethod
  }
}

export type LineraChangeNetworkMethod = (
  input: LineraChangeNetworkInput
) => Promise<LineraChangeNetworkOutput>

export type LineraChangeNetworkInput = NetworkInfo

export interface LineraChangeNetworkOutput {
  success: boolean
  reason?: string
}
