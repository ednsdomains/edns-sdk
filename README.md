# Edns-sdk
[![gitbook](https://img.shields.io/badge/SDK-Document-blueviolet)](https://alex-wong-3.gitbook.io/edns/)
[![github](https://img.shields.io/badge/Git-Repo-inactive)](https://github.com/ednsdomains/Edns-sdk)

# Lookup Record
```typescript
import {LookupAddress, LookUpText, TextType} from "@edns/sdk";
const cryptocurrencies = "ETH"
const ethWalletAddress = await LookupAddress("apexlegend.404",cryptocurrencies)
const record_DESCRIPTION = await LookUpText("apexlegend.404",TextType.DESCRIPTION)
```
# Lookup Reverse Domain
```typescript
import {LookupDomainFromAddress} from "@edns/sdk";
const address = "0xCD58F85e6Ec23733143599Fe0f982fC1d3f6C12c"
const domain = await LookupDomainFromAddress(address);
```
# Set Reverse Domain
```typescript
const RPC_ENDPOINT = 'https://polygon-rpc.com/';
const provider = new ethers.providers.JsonRpcProvider(RPC_ENDPOINT);
//Any Provider or ethers.Signer
const walletWithProvider = new ethers.Wallet(process.env.privateKey, provider);
const transaction = await SetReverseDomain("setter.meta",walletWithProvider)
```
