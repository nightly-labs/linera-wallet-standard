import { ChainId } from '../misc'

/** Version of the feature. */
export type LineraOnNotificationVersion = '1.0.0'

/** Name of the feature. */
export const LineraOnNotificationNamespace = 'linera:onNotification'

export type LineraOnNotificationFeature = {
  /** Namespace for the feature. */
  [LineraOnNotificationNamespace]: {
    /** Version of the feature API. */
    version: LineraOnNotificationVersion
    onNotification: LineraOnNotificationMethod
  }
}

export type LineraOnNotificationMethod = (input: LineraOnNotificationInput) => Promise<LineraOnNotificationOutput>

export type LineraOnNotificationInput = {
  chainId: ChainId
  callback: (notification: any) => void
}
export type LineraOnNotificationOutput = any