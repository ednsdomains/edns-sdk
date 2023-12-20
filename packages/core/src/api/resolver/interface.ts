import { Network } from '@/utils/enums';

export interface IGetResolverInput {
  fqdn: string;
  version?: string;
  chain_id: number;
  onchain?: boolean;
  net: Network;
}
export interface IResolverGdn<T> {
  status: number;
  success: boolean;
  onchain: boolean;
  data?: T;
  error?: {
    code: string;
    reason?: string;
  };
  empty: boolean;
}

export interface IAllRecords {
  fqdn: string;
  address: string;
  text?: string;
  typedTexts: { [key: string]: string };
  typedAddresses: { [key: string]: string };
}

export interface ISubDomain {
  owner: string;
  expiry: string;
  chain: number;
  resolver: null;
  bridging: false;
  user: {
    address: string;
    expiry: string;
  };
  operators: string[];
  hosts: string[];
}
