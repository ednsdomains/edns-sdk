# Edns-sdk
[![gitbook](https://img.shields.io/badge/SDK-Document-blueviolet)](https://alex-wong-3.gitbook.io/edns-sdk/)
[![github](https://img.shields.io/badge/Git-Repo-inactive)](https://github.com/ednsdomains/Edns-sdk)

All action that uses Write function/access requires the signer to be the domain holder.  

# Record
## Token Address Record
A Getter and Setter function that allows domain owners to add wallet addresses to their domain name records.  Users can look up a domain name and find different wallet adresses to send relevant tokens to. 
### Lookup Address (Getter)
In this example, users can type in the domain "apexlegend.404" to look up the linked ETH wallet.
```typescript
import {LookupAddress} from "@edns/sdk";
const cryptocurrencies = "ETH"
const domain = "apexlegend.404"
const ethWalletAddress = await LookupAddress(domain,cryptocurrencies)
```
### Write Address (Setter)
In this example, holder of ednsdomains2022.meta adds BTC wallet address (0x5d6fdbffd6dc6e8a0b69a52dbf010efd905fb7ad) record to their domain name.
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

## Text Record
Text Records for domain. [ 
EMAIL ,
URL ,
AVATAR ,
DESCRIPTION ,
NOTICE ,
KEYWORDS ,
DISCORD ,
GITHUB ,
REDDIT ,
TWITTER ,
TELEGRAM ,
DELEGATE 
]
### Lookup Text (Getter)
In this example, users can type in the domain "apexlegend.404" to look up the linked description.
```typescript
import {LookUpText, TextType} from "@edns/sdk";
const domain = "apexlegend.404"
const record_DESCRIPTION = await LookUpText(domain,TextType.DESCRIPTION)
```
### Write Text (Setter)
In this example, holder of ednsdomains2022.meta adds URL record to their domain name.
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

### Lookup Reverse Domain (Getter)
In this example, users can type in the wallet address (0xCD58F85e6Ec23733143599Fe0f982fC1d3f6C12c) to look up the linked domain.
```typescript 
import {LookupDomainFromAddress} from "@edns/sdk";
const address = "0xCD58F85e6Ec23733143599Fe0f982fC1d3f6C12c"
const domain = await LookupDomainFromAddress(address);
```
### Set Reverse Domain (Setter)
In this example, holder set ednsdomains2022.meta as default domain.
```typescript
import {GetEdnsProvider, SetReverseDomain} from "@edns/sdk";
const provider = await GetEdnsProvider();
//Any Provider or ethers.Signer, Signer must be the domain owner
const walletWithProvider = new ethers.Wallet(process.env.privateKey, provider);
const domain = "ednsdomains2022.meta"
const transaction = await SetReverseDomain(domain,walletWithProvider)
```

## Reclaim
This section of script syncs up the owner value with access control. It is an essential step after each domain transfer. 
```typescript
import {GetEdnsProvider, Reclaim} from "@edns/sdk";
const provider = await GetEdnsProvider();
//Any Provider or ethers.Signer
const walletWithProvider = new ethers.Wallet(process.env.privateKey, provider);
const domain = "ednsdomains2022.meta"
const tokenID = "87038691297541742301397823287250866758499370580712584317467914794075493188134"
const transaction = await Reclaim(domain,walletWithProvider,tokenID)
```
