import { WalletWithLineraFeatures } from './features'

export interface LineraWallet extends WalletWithLineraFeatures {
  /**
   * Website URL of the Wallet
   */
  readonly url: string
}
