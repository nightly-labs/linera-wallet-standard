import { AccountInfo } from '../AccountInfo'
import { NetworkInfo } from '../misc'

/** Version of the feature. */
export type LineraConnectVersion = '1.0.0'

/** Name of the feature. */
export const LineraConnectNamespace = 'linera:connect'

export type LineraConnectFeature = {
  /** Namespace for the feature. */
  [LineraConnectNamespace]: {
    /** Version of the feature API. */
    version: LineraConnectVersion
    connect: LineraConnectMethod
  }
}

export type LineraConnectMethod = (...args: LineraConnectInput) => Promise<LineraConnectOutput>

export type LineraConnectInput = [silent?: boolean, networkInfo?: NetworkInfo]

export type LineraConnectOutput = AccountInfo
