import { AppId } from '../misc'

/** Version of the feature. */
export type MutateVersion = '1.0.0'

/** Name of the feature. */
export const MutateNamespace = 'linera:mutate'

export type MutateFeature = {
  /** Namespace for the feature. */
  [MutateNamespace]: {
    /** Version of the feature API. */
    version: MutateVersion
    mutate: MutateMethod
  }
}

export type MutateMethod = (input: MutateInput) => Promise<MutateOutput>

export type MutateInput = {
  appId: AppId
  query: string
  variables?: object
}

export type MutateOutput = any
