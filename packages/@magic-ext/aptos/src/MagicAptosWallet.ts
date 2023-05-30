import type {
  AccountInfo,
  AdapterPlugin,
  NetworkInfo,
  SignMessagePayload,
  SignMessageResponse,
  WalletName,
} from '@aptos-labs/wallet-adapter-core';
import { TxnBuilderTypes, Types } from 'aptos';
import { Magic } from 'magic-sdk';
import { AptosExtension } from '.';

export const AptosWalletName = 'Magic' as WalletName<'Magic'>;

export class MagicAptosWallet implements AdapterPlugin {
  readonly name = AptosWalletName;
  readonly url = 'https://magic.link/';
  readonly icon =
    'data:image/png;base64,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';
  readonly providerName = 'magicWallet';

  provider: Magic<[AptosExtension]>;

  constructor(magic: Magic<[AptosExtension]>) {
    this.provider = magic;
  }

  async connect(): Promise<AccountInfo> {
    return this.provider.aptos.connect();
  }

  async account(): Promise<AccountInfo> {
    return this.provider.aptos.account();
  }

  async disconnect(): Promise<void> {
    return this.provider.aptos.disconnect();
  }

  async signAndSubmitTransaction(
    transaction: Types.TransactionPayload,
    options?: any,
  ): Promise<{ hash: Types.HexEncodedBytes }> {
    return this.provider.aptos.signAndSubmitTransaction(transaction, options);
  }

  async signAndSubmitBCSTransaction(
    transaction: TxnBuilderTypes.TransactionPayload,
    options?: any,
  ): Promise<{ hash: Types.HexEncodedBytes }> {
    return this.provider.aptos.signAndSubmitBCSTransaction(transaction, options);
  }

  async signMessage(message: SignMessagePayload): Promise<SignMessageResponse> {
    return this.provider.aptos.signMessage(message);
  }

  async network(): Promise<NetworkInfo> {
    return this.provider.aptos.network();
  }

  async onNetworkChange(callback: any): Promise<void> {
    return this.provider.aptos.onNetworkChange(callback);
  }

  async onAccountChange(callback: any): Promise<void> {
    return this.provider.aptos.onAccountChange(callback);
  }
}
