# Records

## Getting Started
```sh
npm install @ednsdomains/core @ednsdomains/records
```

## Importing `RecordManager`

```typescript
import { EdnsChainId, TypedAddress, TypedText, RecordManager } from "@ednsdomains/core";
```

## Class: RecordManager

`RecordManager` is responsible for managing DNS records.

## Constructor

- `factoryType`: "chain" | "api" - Specifies the type of factory being used.

```typescript
const recordManager = new RecordManager("chain");
```

## Methods

### GetAllRecords

Retrieves all records associated with a domain.

#### Parameters:

- `fqdn`: Fully Qualified Domain Name
- `chainId`: EdnsChainId

#### Returns: `Promise<{text: any; address: any;}>`


```typescript
const allReacords = await recordManager.GetAllRecords("example.com", 137);
```

### GetTextRecord

Retrieves text records of a domain.

#### Parameters:

- `fqdn`: Fully Qualified Domain Name
- `chainId`: EdnsChainId

#### Returns: `Promise<any>`

``` typescript
const textRecord: string = await recordManager.GetTextRecord("example.com", 137);
```

### GetTypedTextRecord

Retrieves typed text records of a domain.

#### Parameters:

- `fqdn`: Fully Qualified Domain Name
- `type`: TypedText
- `chainId`: EdnsChainId

#### Returns: `Promise<any>`

```typescript
const typedTextRecord: string = await recordManager.GetTypedTextRecord("example.com", "email", 137);
```

### GetAddressRecord

Retrieves address records of a domain.

#### Parameters:

- `fqdn`: Fully Qualified Domain Name
- `chainId`: EdnsChainId

#### Returns: `Promise<any>`

```typescript
const addressRecord: string = await recordManager.GetAddressRecord("example.com", 137);
```

### GetTypedAddressRecord

Retrieves typed address records of a domain.

#### Parameters:

- `fqdn`: Fully Qualified Domain Name
- `type`: TypedAddress
- `chainId`: EdnsChainId

#### Returns: `Promise<any>`

```typescript
const typedAddressRecord: string = await recordManager.GetTypedAddressRecord("example.com", "BTC", 137);
```

