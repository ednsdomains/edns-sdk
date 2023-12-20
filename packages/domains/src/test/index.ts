import { DomainManager } from "..";

const main = async () => {
  const domainManager = new DomainManager();
  const owner = await domainManager.GetOwner("alexonl799.web3", 137);
  const name = await domainManager.GetName("alexonl799.web3", 137);
  const expiry = await domainManager.GetExpiry("alexonl799.web3", 137);
  const user = await domainManager.GetUser("alexonl799.web3", 137);
  const userExpiry = await domainManager.GetUserExpiry("alexonl799.web3", 137);

  console.log({ owner, name, expiry, user, userExpiry });
};

main();
