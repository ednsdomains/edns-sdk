import { DomainManager } from "..";

const main = async () => {
  const domainManager = new DomainManager("chain");
  const owner = await domainManager.GetOwner("alexon3l799.web3", 137);

  const expiry = await domainManager.GetExpiry("alexonsl799.web3", 137);
  const IsExist = await domainManager.IsExist("alexonl7919.web3", 137);

  console.log({ owner, expiry, IsExist });
  process.exit(0);
};

main();
