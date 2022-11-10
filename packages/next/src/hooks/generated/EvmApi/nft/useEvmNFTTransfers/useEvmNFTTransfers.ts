import { SWRConfiguration } from 'swr/dist/types';
import { UseEvmNftTransfersParams, UseEvmNftTransfersReturn } from './types'
import axios from 'axios'
import useSWR from 'swr';

export const useEvmNFTTransfers = (params: UseEvmNftTransfersParams, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, fetcherParams: any) =>
    axios.post(`/api/moralis/${endpoint}`, fetcherParams).then((res) => res.data);

  const { data, error, mutate, isValidating } = useSWR<UseEvmNftTransfersReturn>(
    [`EvmApi/nft/getNFTTransfers`, params],
    axiosFetcher,
    SWRConfig,
  );

  return {
    data,
    error,
    refetch: async () => mutate(),
    isValidating,
  };
};
