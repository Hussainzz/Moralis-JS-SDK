import { _useClient } from '../../context/MoralisProvider';
import { Operation } from 'moralis/common-core';
import { NullableOperationResolver } from '@moralisweb3/api-utils';
import { useCallback, useMemo } from 'react';
import useSWR from 'swr';

export function _useResolverNullable<Request, JSONRequest, Response, JSONResponse>(
  operation: Operation<Request, JSONRequest, Response, JSONResponse>,
  baseUrl: string,
  request?: Request,
) {
  const { core, swrConfig } = _useClient();
  const { fetch: resolve } = useMemo(
    () => new NullableOperationResolver(operation, baseUrl, core),
    [operation, baseUrl, core],
  );

  const fetcher = async (_url: string, req: Request) => {
    const response = await resolve(req);
    return response?.result || null;
  };

  const { data, error, mutate, isValidating } = useSWR<Response | null>(
    [operation.id, request],
    request ? fetcher : null,
    swrConfig,
  );

  const fetch = useCallback(
    (params?: Request) => {
      const fetchRequest = params ?? request;
      if (!fetchRequest) {
        throw new Error('No fetchRequest params');
      }
      return mutate(fetcher(operation.id, fetchRequest));
    },
    [request],
  );

  return {
    data,
    error,
    fetch,
    isFetching: isValidating,
  };
}
