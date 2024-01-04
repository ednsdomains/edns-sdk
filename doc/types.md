# EDNS SDK Data Types Documentation

This document describes the various types and constants used within the EDNS SDK.

## TypedText

`TypedText` represents different types of text records that can be associated with a domain.

### Available TypedText Values:
- email
- url
- avatar
- description
- notice
- keywords
- discord
- github
- reddit
- twitter
- telegram
- delegate

## TypedAddress

`TypedAddress` represents different types of cryptocurrency addresses that can be associated with a domain.

### Available TypedAddress Values:
- BTC
- LTC
- DOGE
- RDD
- DASH
- PPC
- NMC
- VIA
- GRS
- DGB
- MONA
- DCR
- XEM
- AIB
- SYS
- ETH
- ETC_LEGACY
- ICX
- XVG
- STRAT
- ARK
- ATOM
- ZIL
- EGLD
- ZEN
- XMR
- ZEC
- LSK
- STEEM
- FIRO
- RSK
- KMD
- XRP
- BCH
- XLM
- BTM
- BTG
- NANO
- RVN
- POA_LEGACY
- LCC
- EOS
- TRX
- BCN
- FIO
- BSV
- NEO
- NIM
- EWT_LEGACY
- ALGO
- IOST
- DIVI
- IOTX
- BTS
- CKB
- MRX
- LUNA
- DOT
- VSYS
- ABBC
- NEAR
- ETN
- AION
- KSM
- AE
- KAVA
- FIL
- AR
- CCA
- THETA_LEGACY
- SOL
- XHV
- FLOW
- IRIS
- LRG
- SERO
- BDX
- CCXX
- SRM
- VLX
- BPS
- TFUEL
- GRIN
- GNO_LEGACY
- VET
- BNB
- CLO_LEGACY
- HIVE
- TOMO_LEGACY
- HNT
- RUNE
- BCD
- TT_LEGACY
- FTM_LEGACY
- ONE
- ONT
- NOSTR
- XTZ
- ADA
- SC
- QTUM
- GXC
- ELA
- NAS
- HBAR
- IOTA
- HNS
- STX
- GO_LEGACY
- XCH
- NULS
- AVAX
- STRK
- NRG_LEGACY
- ARDR
- ZEL
- CELO_LEGACY
- WICC
- WAN
- WAVES
- OP
- CRO
- BSC
- GO
- ETC
- TOMO
- POA
- GNO
- TT
- MATIC
- EWT
- FTM
- THETA
- CLO
- NRG
- ARB1
- CELO
- AVAXC

## EdnsChainId

`EdnsChainId` represents the identifier for different blockchain networks.

### Available EdnsChainId Values:

| ID | Chain Name |
|----|------------|
| 43114 | Avalanche C-Chain |
| 250 | Fantom Opera |
| 10 | Optimism |
| 42161 | Arbitrum One |
| 1101 | Polygon zkEVM |
| 1284 | Moonbeam |
| 1285 | Moonriver |
| 1666600000 | Harmony One |
| 137 | Polygon Mainnet |
| 56 | Binance Smart Chain |
| 100 | xDai Chain |
| 42220 | Celo Mainnet |
| 66 | OKExChain Mainnet |
| 4689 | IoTeX Mainnet |

## RecordType

`RecordType` represents the basic types of records that can be associated with a domain.

### Available RecordType Values:
- text
- address

## TypedRecordType

`TypedRecordType` represents the types of records with specific formats that can be associated with a domain.

### Available TypedRecordType Values:
- typedText
- typedAddress
