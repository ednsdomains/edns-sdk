# Edns-sdk
[![gitbook](https://img.shields.io/badge/SDK-Document-blueviolet)](https://alex-wong-3.gitbook.io/edns/)
[![github](https://img.shields.io/badge/Git-Repo-inactive)](https://github.com/ednsdomains/Edns-sdk)

## Record
### Lookup Address
```typescript
import {LookupAddress} from "@edns/sdk";
const cryptocurrencies = "ETH"
const domain = "apexlegend.404"
const ethWalletAddress = await LookupAddress(domain,cryptocurrencies)
```
### Write Address
```typescript
import {LookupAddress} from "@edns/sdk";
const provider = await GetEdnsProvider();
//Any Provider or ethers.Signer
const walletWithProvider = new ethers.Wallet(process.env.privateKey, provider);
const domain = "ednsdomains2022.meta"
const cryptocurrencies = "BTC"
const address = "0x5d6fdbffd6dc6e8a0b69a52dbf010efd905fb7ad"
const transaction = await WriteAddress(domain,cryptocurrencies,address,walletWithProvider)
```
### Lookup Text
```typescript
import {LookUpText, TextType} from "@edns/sdk";
const domain = "apexlegend.404"
const record_DESCRIPTION = await LookUpText(domain,TextType.DESCRIPTION)
```
### Write Text
```typescript
import {WriteText, TextType} from "@edns/sdk";
const provider = await GetEdnsProvider();
//Any Provider or ethers.Signer
const walletWithProvider = new ethers.Wallet(process.env.privateKey, provider);
const domain = "ednsdomains2022.meta"
const content = "https://github.com/ednsdomains/Edns-sdk"
const transaction = await WriteText(domain,TextType.GITHUB,content,walletWithProvider)
```
## Reverse Domain
### Lookup Reverse Domain
```typescript
import {LookupDomainFromAddress} from "@edns/sdk";
const address = "0xCD58F85e6Ec23733143599Fe0f982fC1d3f6C12c"
const domain = await LookupDomainFromAddress(address);
```
### Set Reverse Domain
```typescript
import {GetEdnsProvider, SetReverseDomain} from "@edns/sdk";
const provider = await GetEdnsProvider();
//Any Provider or ethers.Signer
const walletWithProvider = new ethers.Wallet(process.env.privateKey, provider);
const domain = "ednsdomains2022.meta"
const transaction = await SetReverseDomain(domain,walletWithProvider)
```

## Reclaim
### Reclaim
```typescript
import {GetEdnsProvider, Reclaim} from "@edns/sdk";
const provider = await GetEdnsProvider();
//Any Provider or ethers.Signer
const walletWithProvider = new ethers.Wallet(process.env.privateKey, provider);
const domain = "ednsdomains2022.meta"
const tokenID = "87038691297541742301397823287250866758499370580712584317467914794075493188134"
const transaction = await Reclaim(domain,walletWithProvider,tokenID)
```
