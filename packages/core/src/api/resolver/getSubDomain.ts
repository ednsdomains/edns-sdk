import { AxiosInstance } from 'axios';
import { IGetResolverInput, IResolverGdn, ISubDomain } from './interface';
import { errorHandler } from '../errorHandler';
import config from '@/config';

export const getSubDomain =
  (instance: AxiosInstance) =>
  async (input: IGetResolverInput): Promise<IResolverGdn<ISubDomain>> => {
    try {
      // TODO
      const { fqdn, version = 'v2', chain_id, onchain = false } = input;
      const net = config.web3.blockchain.network;
      const params = {
        onchain,
        net,
        version,
        chain_id,
      };
      const response = await instance.get(
        `${config.api.resolverGdn.endPoint}${config.api.resolverGdn.router.domains}/${fqdn}`,
        {
          params,
        },
      );
      return response.data;
    } catch (e) {
      throw errorHandler(e);
    }
  };
