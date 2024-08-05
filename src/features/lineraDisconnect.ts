/** Version of the feature. */
export type LineraDisconnectVersion = '1.0.0'

/** Name of the feature. */
export const LineraDisconnectNamespace = 'linera:disconnect'

export type LineraDisconnectFeature = {
  /** Namespace for the feature. */
  [LineraDisconnectNamespace]: {
    /** Version of the feature API. */
    version: LineraDisconnectVersion
    disconnect: LineraDisconnectMethod
  }
}

export type LineraDisconnectMethod = () => Promise<void>
