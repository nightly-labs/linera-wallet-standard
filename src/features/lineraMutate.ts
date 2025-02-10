import { AppId } from '../misc'

/** Version of the feature. */
export type LineraMutateVersion = '1.0.0'

/** Name of the feature. */
export const LineraMutateNamespace = 'linera:mutate'

export type LineraMutateFeature = {
  /** Namespace for the feature. */
  [LineraMutateNamespace]: {
    /** Version of the feature API. */
    version: LineraMutateVersion
    mutate: LineraMutateMethod
  }
}

export type LineraMutateMethod = (input: LineraMutateInput) => Promise<LineraMutateOutput>

export type LineraMutateInput = {
  appId: AppId
  query: string
  variables?: object
}

export type LineraMutateOutput = any
