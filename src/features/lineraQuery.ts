import { ChainId } from '../misc'

/** Version of the feature. */
export type QueryVersion = '1.0.0'

/** Name of the feature. */
export const QueryNamespace = 'linera:query'

export type QueryFeature = {
  /** Namespace for the feature. */
  [QueryNamespace]: {
    /** Version of the feature API. */
    version: QueryVersion
    query: QueryMethod
  }
}

export type QueryMethod = (input: QueryInput) => Promise<QueryOutput>

export type QueryInput = {
  chainId: ChainId
  query: string
  variables?: object
}

export type QueryOutput = any
