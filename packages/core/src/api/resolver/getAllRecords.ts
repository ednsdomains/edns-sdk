import { AxiosInstance } from 'axios';
import { IAllRecords, IGetResolverInput, IResolverGdn } from './interface';
import { Network } from '@/utils/enums';
import { errorHandler } from '../errorHandler';
import config from '@/config';

interface IGetAllRecordsInput {
  fqdn: string;
  version?: string;
  chain_id: number;
  onchain?: boolean;
  net: Network;
}

const dummyData: IAllRecords = {
  fqdn: 'fqdn',
  address: 'address',
  text: 'textRecord',
  typedTexts: {},
  typedAddresses: {},
};

const dummyreturn: IResolverGdn<IAllRecords> = {
  status: 200,
  success: true,
  onchain: true,
  data: dummyData,
  empty: false,
};
export const getAllRecords =
  (instance: AxiosInstance) =>
  async (input: IGetResolverInput): Promise<IResolverGdn<IAllRecords>> => {
    try {
      const { fqdn, version = 'v2', chain_id, onchain = false } = input;
      const net = config.web3.blockchain.network;
      const params = {
        onchain,
        net,
        version,
        chain_id,
      };
      const response = await instance.get(
        `${config.api.resolverGdn.endPoint}${config.api.resolverGdn.router.allRecords}/${fqdn}`,
        {
          params,
        },
      );
      return response.data;
    } catch (e) {
      throw errorHandler(e);
    }
  };
