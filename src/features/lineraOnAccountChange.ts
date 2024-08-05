import { AccountInfo } from '../AccountInfo'

/** Version of the feature. */
export type LineraOnAccountChangeVersion = '1.0.0'

/** Name of the feature. */
export const LineraOnAccountChangeNamespace = 'linera:onAccountChange'

export type LineraOnAccountChangeFeature = {
  /** Namespace for the feature. */
  [LineraOnAccountChangeNamespace]: {
    /** Version of the feature API. */
    version: LineraOnAccountChangeVersion
    onAccountChange: LineraOnAccountChangeMethod
  }
}

export type LineraOnAccountChangeMethod = (input: LineraOnAccountChangeInput) => Promise<void>

export type LineraOnAccountChangeInput = (newAccount: AccountInfo) => void
