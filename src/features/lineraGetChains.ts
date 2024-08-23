import { ChainId } from '../misc'

/** Version of the feature. */
export type GetChainsVersion = '1.0.0'

/** Name of the feature. */
export const GetChainsNamespace = 'linera:chains'

export type GetChainsFeature = {
  /** Namespace for the feature. */
  [GetChainsNamespace]: {
    /** Version of the feature API. */
    version: GetChainsVersion
    getChains: GetChainsMethod
  }
}

export type GetChainsMethod = () => Promise<GetChainsOutput>

export type GetChainsOutput = ChainId
