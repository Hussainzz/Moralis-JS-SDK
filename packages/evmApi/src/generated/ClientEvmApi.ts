
// CAUTION: This file is automatically generated. Do not edit it manually!

import { endpointWeightsOperation, EndpointWeightsResponse, EndpointWeightsJSONResponse, runContractFunctionOperation, RunContractFunctionRequest, RunContractFunctionResponse, RunContractFunctionJSONResponse, web3ApiVersionOperation, Web3ApiVersionResponse, Web3ApiVersionJSONResponse, getBlockOperation, GetBlockRequest, GetBlockResponse, GetBlockJSONResponse, getDateToBlockOperation, GetDateToBlockRequest, GetDateToBlockResponse, GetDateToBlockJSONResponse, getContractEventsOperation, GetContractEventsRequest, GetContractEventsResponse, GetContractEventsJSONResponse, getContractLogsOperation, GetContractLogsRequest, GetContractLogsResponse, GetContractLogsJSONResponse, getContractNFTsOperation, GetContractNFTsRequest, GetContractNFTsResponse, GetContractNFTsJSONResponse, getNFTContractMetadataOperation, GetNFTContractMetadataRequest, GetNFTContractMetadataResponse, GetNFTContractMetadataJSONResponse, getNFTContractTransfersOperation, GetNFTContractTransfersRequest, GetNFTContractTransfersResponse, GetNFTContractTransfersJSONResponse, getNFTLowestPriceOperation, GetNFTLowestPriceRequest, GetNFTLowestPriceResponse, GetNFTLowestPriceJSONResponse, getNFTMetadataOperation, GetNFTMetadataRequest, GetNFTMetadataResponse, GetNFTMetadataJSONResponse, getNFTOwnersOperation, GetNFTOwnersRequest, GetNFTOwnersResponse, GetNFTOwnersJSONResponse, getNFTTokenIdOwnersOperation, GetNFTTokenIdOwnersRequest, GetNFTTokenIdOwnersResponse, GetNFTTokenIdOwnersJSONResponse, getNFTTradesOperation, GetNFTTradesRequest, GetNFTTradesResponse, GetNFTTradesJSONResponse, getNFTTransfersByBlockOperation, GetNFTTransfersByBlockRequest, GetNFTTransfersByBlockResponse, GetNFTTransfersByBlockJSONResponse, getNFTTransfersFromToBlockOperation, GetNFTTransfersFromToBlockRequest, GetNFTTransfersFromToBlockResponse, GetNFTTransfersFromToBlockJSONResponse, getNFTTransfersOperation, GetNFTTransfersRequest, GetNFTTransfersResponse, GetNFTTransfersJSONResponse, getWalletNFTCollectionsOperation, GetWalletNFTCollectionsRequest, GetWalletNFTCollectionsResponse, GetWalletNFTCollectionsJSONResponse, getWalletNFTsOperation, GetWalletNFTsRequest, GetWalletNFTsResponse, GetWalletNFTsJSONResponse, getWalletNFTTransfersOperation, GetWalletNFTTransfersRequest, GetWalletNFTTransfersResponse, GetWalletNFTTransfersJSONResponse, reSyncMetadataOperation, ReSyncMetadataRequest, ReSyncMetadataResponse, ReSyncMetadataJSONResponse, searchNFTsOperation, SearchNFTsRequest, SearchNFTsResponse, SearchNFTsJSONResponse, syncNFTContractOperation, SyncNFTContractRequest, SyncNFTContractResponse, SyncNFTContractJSONResponse, getNativeBalanceOperation, GetNativeBalanceRequest, GetNativeBalanceResponse, GetNativeBalanceJSONResponse, getPairAddressOperation, GetPairAddressRequest, GetPairAddressResponse, GetPairAddressJSONResponse, getPairReservesOperation, GetPairReservesRequest, GetPairReservesResponse, GetPairReservesJSONResponse, getTokenAllowanceOperation, GetTokenAllowanceRequest, GetTokenAllowanceResponse, GetTokenAllowanceJSONResponse, getTokenMetadataBySymbolOperation, GetTokenMetadataBySymbolRequest, GetTokenMetadataBySymbolResponse, GetTokenMetadataBySymbolJSONResponse, getTokenMetadataOperation, GetTokenMetadataRequest, GetTokenMetadataResponse, GetTokenMetadataJSONResponse, getTokenPriceOperation, GetTokenPriceRequest, GetTokenPriceResponse, GetTokenPriceJSONResponse, getTokenTransfersOperation, GetTokenTransfersRequest, GetTokenTransfersResponse, GetTokenTransfersJSONResponse, getWalletTokenBalancesOperation, GetWalletTokenBalancesRequest, GetWalletTokenBalancesResponse, GetWalletTokenBalancesJSONResponse, getWalletTokenTransfersOperation, GetWalletTokenTransfersRequest, GetWalletTokenTransfersResponse, GetWalletTokenTransfersJSONResponse, getTransactionOperation, GetTransactionRequest, GetTransactionResponse, GetTransactionJSONResponse, getWalletTransactionsOperation, GetWalletTransactionsRequest, GetWalletTransactionsResponse, GetWalletTransactionsJSONResponse, resolveAddressOperation, ResolveAddressRequest, ResolveAddressResponse, ResolveAddressJSONResponse, resolveDomainOperation, ResolveDomainRequest, ResolveDomainResponse, ResolveDomainJSONResponse, uploadFolderOperation, UploadFolderRequest, UploadFolderResponse, UploadFolderJSONResponse } from '@moralisweb3/common-evm-utils';
import { OperationResolver, NullableOperationResolver, PaginatedOperationResolver } from '@moralisweb3/api-utils';
import { ApiModule, ResponseAdapter, PaginatedResponseAdapter } from '@moralisweb3/common-core';

export abstract class ClientEvmApi extends ApiModule {

  
  public readonly utils = {
   endpointWeights: (): Promise<ResponseAdapter<EndpointWeightsResponse, EndpointWeightsJSONResponse>> => {
      return new OperationResolver(endpointWeightsOperation, this.baseUrl, this.core).fetch({});
    },
   runContractFunction: (request: RunContractFunctionRequest): Promise<ResponseAdapter<RunContractFunctionResponse, RunContractFunctionJSONResponse>> => {
      return new OperationResolver(runContractFunctionOperation, this.baseUrl, this.core).fetch(request);
    },
   web3ApiVersion: (): Promise<ResponseAdapter<Web3ApiVersionResponse, Web3ApiVersionJSONResponse>> => {
      return new OperationResolver(web3ApiVersionOperation, this.baseUrl, this.core).fetch({});
    },

  };

  public readonly block = {
   getBlock: (request: GetBlockRequest): Promise<ResponseAdapter<GetBlockResponse, GetBlockJSONResponse> | null> => {
      return new NullableOperationResolver(getBlockOperation, this.baseUrl, this.core).fetch(request);
    },
   getDateToBlock: (request: GetDateToBlockRequest): Promise<ResponseAdapter<GetDateToBlockResponse, GetDateToBlockJSONResponse>> => {
      return new OperationResolver(getDateToBlockOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly events = {
   getContractEvents: (request: GetContractEventsRequest): Promise<PaginatedResponseAdapter<GetContractEventsResponse, GetContractEventsJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getContractEventsOperation, this.baseUrl, this.core).fetch(request);
    },
   getContractLogs: (request: GetContractLogsRequest): Promise<PaginatedResponseAdapter<GetContractLogsResponse, GetContractLogsJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getContractLogsOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly nft = {
   getContractNFTs: (request: GetContractNFTsRequest): Promise<PaginatedResponseAdapter<GetContractNFTsResponse, GetContractNFTsJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getContractNFTsOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTContractMetadata: (request: GetNFTContractMetadataRequest): Promise<ResponseAdapter<GetNFTContractMetadataResponse, GetNFTContractMetadataJSONResponse> | null> => {
      return new NullableOperationResolver(getNFTContractMetadataOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTContractTransfers: (request: GetNFTContractTransfersRequest): Promise<PaginatedResponseAdapter<GetNFTContractTransfersResponse, GetNFTContractTransfersJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getNFTContractTransfersOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTLowestPrice: (request: GetNFTLowestPriceRequest): Promise<ResponseAdapter<GetNFTLowestPriceResponse, GetNFTLowestPriceJSONResponse> | null> => {
      return new NullableOperationResolver(getNFTLowestPriceOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTMetadata: (request: GetNFTMetadataRequest): Promise<ResponseAdapter<GetNFTMetadataResponse, GetNFTMetadataJSONResponse> | null> => {
      return new NullableOperationResolver(getNFTMetadataOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTOwners: (request: GetNFTOwnersRequest): Promise<PaginatedResponseAdapter<GetNFTOwnersResponse, GetNFTOwnersJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getNFTOwnersOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTTokenIdOwners: (request: GetNFTTokenIdOwnersRequest): Promise<PaginatedResponseAdapter<GetNFTTokenIdOwnersResponse, GetNFTTokenIdOwnersJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getNFTTokenIdOwnersOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTTrades: (request: GetNFTTradesRequest): Promise<PaginatedResponseAdapter<GetNFTTradesResponse, GetNFTTradesJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getNFTTradesOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTTransfersByBlock: (request: GetNFTTransfersByBlockRequest): Promise<PaginatedResponseAdapter<GetNFTTransfersByBlockResponse, GetNFTTransfersByBlockJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getNFTTransfersByBlockOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTTransfersFromToBlock: (request: GetNFTTransfersFromToBlockRequest): Promise<PaginatedResponseAdapter<GetNFTTransfersFromToBlockResponse, GetNFTTransfersFromToBlockJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getNFTTransfersFromToBlockOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTTransfers: (request: GetNFTTransfersRequest): Promise<PaginatedResponseAdapter<GetNFTTransfersResponse, GetNFTTransfersJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getNFTTransfersOperation, this.baseUrl, this.core).fetch(request);
    },
   getWalletNFTCollections: (request: GetWalletNFTCollectionsRequest): Promise<PaginatedResponseAdapter<GetWalletNFTCollectionsResponse, GetWalletNFTCollectionsJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getWalletNFTCollectionsOperation, this.baseUrl, this.core).fetch(request);
    },
   getWalletNFTs: (request: GetWalletNFTsRequest): Promise<PaginatedResponseAdapter<GetWalletNFTsResponse, GetWalletNFTsJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getWalletNFTsOperation, this.baseUrl, this.core).fetch(request);
    },
   getWalletNFTTransfers: (request: GetWalletNFTTransfersRequest): Promise<PaginatedResponseAdapter<GetWalletNFTTransfersResponse, GetWalletNFTTransfersJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getWalletNFTTransfersOperation, this.baseUrl, this.core).fetch(request);
    },
   reSyncMetadata: (request: ReSyncMetadataRequest): Promise<ResponseAdapter<ReSyncMetadataResponse, ReSyncMetadataJSONResponse>> => {
      return new OperationResolver(reSyncMetadataOperation, this.baseUrl, this.core).fetch(request);
    },
   searchNFTs: (request: SearchNFTsRequest): Promise<PaginatedResponseAdapter<SearchNFTsResponse, SearchNFTsJSONResponse['result']>> => {
      return new PaginatedOperationResolver(searchNFTsOperation, this.baseUrl, this.core).fetch(request);
    },
   syncNFTContract: (request: SyncNFTContractRequest): Promise<ResponseAdapter<SyncNFTContractResponse, SyncNFTContractJSONResponse>> => {
      return new OperationResolver(syncNFTContractOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly balance = {
   getNativeBalance: (request: GetNativeBalanceRequest): Promise<ResponseAdapter<GetNativeBalanceResponse, GetNativeBalanceJSONResponse>> => {
      return new OperationResolver(getNativeBalanceOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly defi = {
   getPairAddress: (request: GetPairAddressRequest): Promise<ResponseAdapter<GetPairAddressResponse, GetPairAddressJSONResponse>> => {
      return new OperationResolver(getPairAddressOperation, this.baseUrl, this.core).fetch(request);
    },
   getPairReserves: (request: GetPairReservesRequest): Promise<ResponseAdapter<GetPairReservesResponse, GetPairReservesJSONResponse>> => {
      return new OperationResolver(getPairReservesOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly token = {
   getTokenAllowance: (request: GetTokenAllowanceRequest): Promise<ResponseAdapter<GetTokenAllowanceResponse, GetTokenAllowanceJSONResponse>> => {
      return new OperationResolver(getTokenAllowanceOperation, this.baseUrl, this.core).fetch(request);
    },
   getTokenMetadataBySymbol: (request: GetTokenMetadataBySymbolRequest): Promise<ResponseAdapter<GetTokenMetadataBySymbolResponse, GetTokenMetadataBySymbolJSONResponse>> => {
      return new OperationResolver(getTokenMetadataBySymbolOperation, this.baseUrl, this.core).fetch(request);
    },
   getTokenMetadata: (request: GetTokenMetadataRequest): Promise<ResponseAdapter<GetTokenMetadataResponse, GetTokenMetadataJSONResponse>> => {
      return new OperationResolver(getTokenMetadataOperation, this.baseUrl, this.core).fetch(request);
    },
   getTokenPrice: (request: GetTokenPriceRequest): Promise<ResponseAdapter<GetTokenPriceResponse, GetTokenPriceJSONResponse>> => {
      return new OperationResolver(getTokenPriceOperation, this.baseUrl, this.core).fetch(request);
    },
   getTokenTransfers: (request: GetTokenTransfersRequest): Promise<PaginatedResponseAdapter<GetTokenTransfersResponse, GetTokenTransfersJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getTokenTransfersOperation, this.baseUrl, this.core).fetch(request);
    },
   getWalletTokenBalances: (request: GetWalletTokenBalancesRequest): Promise<ResponseAdapter<GetWalletTokenBalancesResponse, GetWalletTokenBalancesJSONResponse>> => {
      return new OperationResolver(getWalletTokenBalancesOperation, this.baseUrl, this.core).fetch(request);
    },
   getWalletTokenTransfers: (request: GetWalletTokenTransfersRequest): Promise<PaginatedResponseAdapter<GetWalletTokenTransfersResponse, GetWalletTokenTransfersJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getWalletTokenTransfersOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly transaction = {
   getTransaction: (request: GetTransactionRequest): Promise<ResponseAdapter<GetTransactionResponse, GetTransactionJSONResponse> | null> => {
      return new NullableOperationResolver(getTransactionOperation, this.baseUrl, this.core).fetch(request);
    },
   getWalletTransactions: (request: GetWalletTransactionsRequest): Promise<PaginatedResponseAdapter<GetWalletTransactionsResponse, GetWalletTransactionsJSONResponse['result']>> => {
      return new PaginatedOperationResolver(getWalletTransactionsOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly resolve = {
   resolveAddress: (request: ResolveAddressRequest): Promise<ResponseAdapter<ResolveAddressResponse, ResolveAddressJSONResponse> | null> => {
      return new NullableOperationResolver(resolveAddressOperation, this.baseUrl, this.core).fetch(request);
    },
   resolveDomain: (request: ResolveDomainRequest): Promise<ResponseAdapter<ResolveDomainResponse, ResolveDomainJSONResponse> | null> => {
      return new NullableOperationResolver(resolveDomainOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly ipfs = {
   uploadFolder: (request: UploadFolderRequest): Promise<ResponseAdapter<UploadFolderResponse, UploadFolderJSONResponse>> => {
      return new OperationResolver(uploadFolderOperation, this.baseUrl, this.core).fetch(request);
    },

  };

}
