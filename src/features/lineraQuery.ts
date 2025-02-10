import { AppId } from '../misc'

/** Version of the feature. */
export type LineraQueryVersion = '1.0.0'

/** Name of the feature. */
export const LineraQueryNamespace = 'linera:query'

export type LineraQueryFeature = {
  /** Namespace for the feature. */
  [LineraQueryNamespace]: {
    /** Version of the feature API. */
    version: LineraQueryVersion
    query: LineraQueryMethod
  }
}

export type LineraQueryMethod = (input: LineraQueryInput) => Promise<LineraQueryOutput>

export type LineraQueryInput = {
  appId: AppId
  query: string
  variables?: object
}

export type LineraQueryOutput = any
