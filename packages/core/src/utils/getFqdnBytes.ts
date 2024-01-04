import { ethers } from "ethers";

export const getFqdnBytes = (fqdn: string) => {
  const [tld, name, host = "@"] = fqdn.split(".").reverse();
  const _host = ethers.utils.toUtf8Bytes(host);
  const _name = ethers.utils.toUtf8Bytes(name);
  const _tld = ethers.utils.toUtf8Bytes(tld);
  return { _host, _name, _tld };
};

export const getKeccak256 = (fqdn: string) => {
  const { _host, _name, _tld } = getFqdnBytes(fqdn);
  return {
    _host: ethers.utils.keccak256(_host),
    _name: ethers.utils.keccak256(_name),
    _tld: ethers.utils.keccak256(_tld),
  };
};
