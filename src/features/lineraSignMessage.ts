/** Version of the feature. */
export type LineraSignMessageVersion = '1.0.0'

/** Name of the feature. */
export const LineraSignMessageNamespace = 'linera:signMessage'

export type LineraSignMessageFeature = {
  /** Namespace for the feature. */
  [LineraSignMessageNamespace]: {
    /** Version of the feature API. */
    version: LineraSignMessageVersion
    signMessage: LineraSignMessageMethod
  }
}

export type LineraSignMessageMethod = (
  input: LineraSignMessageInput
) => Promise<LineraSignMessageOutput>

export type LineraSignMessageInput = {
  message: string
}

export type LineraSignMessageOutput = {
  signature: Uint8Array
}
