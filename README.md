# Edns-sdk
[![gitbook](https://img.shields.io/badge/SDK-Document-blueviolet)](https://alex-wong-3.gitbook.io/edns/)



```typescript
import {LookupAddress, LookUpText, TextType} from "@edns/sdk";

const cryptocurrencies = "ETH"
const ethWalletAddress = await LookupAddress("apexlegend.404",cryptocurrencies)
const record_DESCRIPTION = await LookUpText("apexlegend.404",TextType.DESCRIPTION)
```
