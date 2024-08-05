# Linera Wallet Standard

The Linera Wallet Standard defines APIs for wallet and application interactions for the Linera ecosystem.

It is based on a general [Wallet Standard](https://github.com/wallet-standard/wallet-standard) which is is a chain-agnostic set of interfaces and conventions that aim to improve how applications interact with injected wallets.

## Code

- [LineraWallet](./src/wallet.ts) and [LineraWalletAccount](./src/account.ts) interfaces
- Wallet [registerWallet](https://github.com/wallet-standard/wallet-standard/blob/master/packages/core/wallet/src/register.ts#L25) function
- App [getLineraWallets](./src/detect.ts) function
- Example of a [wallet integration](./example/wallet.ts)
