/** Version of the feature. */
export type LineraSignAndSubmitTransactionVersion = '1.0.0'

/** Name of the feature. */
export const LineraSignAndSubmitTransactionNamespace = 'linera:signAndSubmitTransaction'

/**
 * A Wallet Standard feature for signing a transaction, and returning the
 * hash of the transaction.
 */
export type LineraSignAndSubmitTransactionFeature = {
  /** Namespace for the feature. */
  [LineraSignAndSubmitTransactionNamespace]: {
    /** Version of the feature API. */
    version: LineraSignAndSubmitTransactionVersion
    signAndSubmitTransaction: LineraSignAndSubmitTransactionMethod
  }
}

export type LineraSignAndSubmitTransactionMethod = (
  transaction: LineraSignAndSubmitTransactionInput
) => Promise<LineraSignAndSubmitTransactionOutput>

// TODO
export interface LineraSignAndSubmitTransactionInput {
  payload: object
}

// TODO
export interface LineraSignAndSubmitTransactionOutput {
  hash: string
}
