import { RecordManager } from "..";

const main = async () => {
  const recordManager = new RecordManager();
  console.log(await recordManager.GetAllRecords("alexonl799.web3", 137));
  process.exit(0);
};
main();
