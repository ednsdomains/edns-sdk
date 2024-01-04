# Domains

## Getting Started
```sh
npm install @ednsdomains/core @ednsdomains/domains
```

## Importing `DomainManager`

```typescript
import { EdnsChainId, DomainManager } from "@ednsdomains/core";
```

## Class: DomainManager

`DomainManager` is responsible for domain-related operations.

## Constructor

- `factoryType`: "chain" | "api" - Specifies the type of factory being used.

```typescript
const domainManager = new DomainManager("chain");
```

## Methods

### IsDomainAvailable

Checks if a domain is available.

#### Parameters:

- `fqdn`: Fully Qualified Domain Name
- `chainId`: EdnsChainId
- `timeout?`: (optional) timeout in milliseconds

#### Returns: `Promise<boolean>`

```typescript
const isAvailable: boolean = await domainManager.IsDomainAvailable("example.com", 137);
```

### IsExist

Checks if a domain already exists.

#### Parameters: 

- `fqdn`: Fully Qualified Domain Name
- `chainId`: EdnsChainId

#### Returns: `Promise<boolean>`

```typescript
const isExist: boolean = await domainManager.IsExist("example.com", 137)
```

### GetOwner

Retrieves the owner of a domain.

#### Parameters: 

- `fqdn`: Fully Qualified Domain Name
- `chainId`: EdnsChainId

#### Returns: `Promise\<string>`

```typescript
const owner: string = await domainManager.GetOwner("example.com", 137)
```

### GetExpiry

Retrieves the expiry date of a domain.

#### Parameters: 

- `fqdn`: Fully Qualified Domain Name
- `chainId`: EdnsChainId

#### Returns: `Promise<number>`

```typescript
const expiry: number = domainManager.GetExpiry("example.com", 137)
```
