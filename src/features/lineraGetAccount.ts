import { AccountInfo } from '../AccountInfo'

/** Version of the feature. */
export type LineraGetAccountVersion = '1.0.0'

/** Name of the feature. */
export const LineraGetAccountNamespace = 'linera:account'

export type LineraGetAccountFeature = {
  /** Namespace for the feature. */
  [LineraGetAccountNamespace]: {
    /** Version of the feature API. */
    version: LineraGetAccountVersion
    account: LineraGetAccountMethod
  }
}

export type LineraGetAccountMethod = () => Promise<LineraGetsAccountOutput>

export type LineraGetsAccountOutput = AccountInfo
