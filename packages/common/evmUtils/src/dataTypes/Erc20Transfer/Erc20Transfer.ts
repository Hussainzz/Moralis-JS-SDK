import Core, { MoralisDataObject, BigNumber, dateInputToDate, CoreProvider } from '@moralisweb3/common-core';
import { EvmAddress } from '../EvmAddress';
import { EvmChain } from '../EvmChain';
import { Erc20TransferInput, Erc20TransferData } from './types';

/**
 * Valid input for a new Erc20Transfer instance.
 * This can be an existing {@link Erc20Transfer} or a valid {@link Erc20TransferInput} object
 */
export type Erc20Transferish = Erc20TransferInput | Erc20Transfer;

/**
 * The Erc20Transfer is a representation of an Erc20 token transfer.
 *
 * @category DataType
 */
export class Erc20Transfer implements MoralisDataObject {
  /**
   * Create a new instance of Erc20Transfer from any valid input
   * @param data - the Erc20Transferish type
   * @example
   * ```
   * const transfer = Erc20Transfer.create(data);
   *```
   */
  static create(data: Erc20Transferish, core?: Core) {
    if (data instanceof Erc20Transfer) {
      return data;
    }
    const finalCore = core ?? CoreProvider.getDefault();
    return new Erc20Transfer(data, finalCore);
  }

  private _data: Erc20TransferData;

  constructor(data: Erc20TransferInput, core: Core) {
    this._data = Erc20Transfer.parse(data, core);
  }

  static parse = (data: Erc20TransferInput, core: Core): Erc20TransferData => ({
    ...data,
    chain: EvmChain.create(data.chain, core),
    address: EvmAddress.create(data.address, core),
    blockTimestamp: dateInputToDate(data.blockTimestamp),
    blockNumber: BigNumber.create(data.blockNumber),
    toAddress: EvmAddress.create(data.toAddress, core),
    fromAddress: EvmAddress.create(data.fromAddress, core),
    value: BigNumber.create(data.value),
    transactionIndex: Number(data.transactionIndex),
    logIndex: Number(data.logIndex),
  });

  /**
   * Check the equality between two Erc20 transfers
   * @param dataA - The first transfer to compare
   * @param dataB - The second transfer to compare
   * @example Erc20Transfer.equals(dataA, dataB)
   * @returns true if the transfers are equal, false otherwise
   */
  static equals(dataA: Erc20Transferish, dataB: Erc20Transferish) {
    const tokenA = Erc20Transfer.create(dataA);
    const tokenB = Erc20Transfer.create(dataB);

    return JSON.stringify(tokenA.toJSON()) === JSON.stringify(tokenB.toJSON());
  }

  /**
   * Checks the equality of the current trnasfer with another erc20 trnasfer
   * @param data - the transfer to compare with
   * @example transfer.equals(data)
   * @returns true if the transfers are equal, false otherwise
   */
  equals(data: Erc20Transferish): boolean {
    return Erc20Transfer.equals(this, data);
  }

  /**
   * @returns a JSON represention of the transfer.
   * @example transfer.toJSON()
   */
  toJSON() {
    const data = this._data;
    return {
      ...data,
      chain: data.chain.format(),
      address: data.address.format(),
      blockNumber: data.blockNumber.toString(),
      toAddress: data.toAddress.format(),
      fromAddress: data.fromAddress.format(),
      value: data.value.toString(),
    };
  }

  /**
   * @returns a JSON represention of the transfer.
   * @example transfer.format()
   */
  format() {
    return this.toJSON();
  }

  /**
   * @returns all the data without casting it to JSON.
   * @example transfer.result
   */
  get result() {
    return this._data;
  }

  /**
   * @returns the contract address of the transfer
   * @example transfer.address // EvmAddress
   */
  get address() {
    return this._data.address;
  }
  /**
   * @returns the contract address of the transfer
   * @example transfer.contractAddress // EvmAddress
   */
  // Used since /erc20/transfers endpoints that return toAddress under a different name
  get contractAddress() {
    return this._data.address;
  }

  /**
   * @returns the block hash of the transfer
   * @example transfer.blockHash // "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86"
   */
  get blockHash() {
    return this._data.blockHash;
  }

  /**
   * @returns the block number of the transfer
   * @example transfer.blockNumber // BigNumber
   */
  get blockNumber() {
    return this._data.blockNumber;
  }

  /**
   * @returns the block timestamp of the transfer
   * @example transfer.blockTimestamp // Date
   */
  get blockTimestamp() {
    return this._data.blockTimestamp;
  }

  /**
   * @returns the chain of the transfer
   * @example transfer.chain // EvmChain
   */
  get chain() {
    return this._data.chain;
  }

  /**
   * @returns the from address of the transfer
   * @example transfer.fromAddress // EvmAddress
   */
  get fromAddress() {
    return this._data.fromAddress;
  }

  /**
   * @returns the from address of the transfer
   * @example transfer.fromWallet // EvmAddress
   */
  // Used since /erc20/transfers endpoints that return toAddress under a different name
  get fromWallet() {
    return this._data.fromAddress;
  }

  /**
   * @returns the to address of the transfer
   * @example transfer.toAddress // EvmAddress
   */
  get toAddress() {
    return this._data.toAddress;
  }

  /**
   * @returns the to address of the transfer
   * @example transfer.toWallet // EvmAddress
   */
  // Used since /erc20/transfers endpoints that return toAddress under a different name
  get toWallet() {
    return this._data.toAddress;
  }

  /**
   * @returns the transaction hash of the transfer
   * @example transfer.transactionHash // "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86"
   */
  get transactionHash() {
    return this._data.transactionHash;
  }

  /**
   * @returns the value of the transfer
   * @example transfer.value // BigNumber
   */
  get value() {
    return this._data.value;
  }

  /**
   * @returns the transactionIndex of the transfer
   * @example transfer.transactionIndex // 3
   */
  get transactionIndex() {
    return this._data.transactionIndex;
  }

  /**
   * @returns the logIndex of the transfer
   * @example transfer.logIndex // 2
   */
  get logIndex() {
    return this._data.logIndex;
  }

  /**
   * @returns possibility of the token being a spam token
   * @example transfer.possibleSpam // true
   */
  get possibleSpam() {
    return this._data.possibleSpam;
  }
}
