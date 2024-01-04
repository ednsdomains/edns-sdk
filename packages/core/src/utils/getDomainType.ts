import tlds from "../data/tlds.json";
import { ITldInfo, ITldList } from "../interfaces";
export const getDomainType = (fqdn: string) => {
  const [tld] = fqdn.split(".").reverse();
  return (tlds as ITldList)[tld].type;
};
