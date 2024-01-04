# EDNS SDK for JavaScript

[![NPM version](https://img.shields.io/npm/v/@ednsdomains/core.svg)](https://www.npmjs.com/package/@ednsdomains/core)
[![NPM downloads](https://img.shields.io/npm/dm/@ednsdomains/core.svg)](https://www.npmjs.com/package/@ednsdomains/core)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/@ednsdomains/core)
[![Known Vulnerabilities](https://snyk.io/test/github/@ednsdomains/core/badge.svg)](https://snyk.io/test/github/ednsdomains/edns-sdk)

## Abstract 
The EDNS SDK is a comprehensive toolkit designed to seamlessly integrate with the [EDNS smart contract](https://github.com/ednsdomains/contracts/tree/develop) and [resolver API](https://github.com/One2Cloud/resolver-gdn). It empowers developers by providing an intuitive set of tools and resources for connecting, managing, and interacting with the EDNS ecosystem. With this SDK, users can effortlessly harness the full potential of EDNS's advanced blockchain functionalities to create robust and innovative decentralized applications.

## Table of Contents:
* [Getting Started](#getting-Started)
* [Getting Help](#getting-help)
* [Contributing](#contributing)

## Getting Started

## How To Install

### In Node.js

The preferred way to install the EDNS SDK for Node.js is to use the
[npm](http://npmjs.org) package manager for Node.js. Simply type the following
into a terminal window:

```sh
npm install @edns/core
```


## Usage with TypeScript
The EDNS SDK for JavaScript bundles TypeScript definition files for use in TypeScript projects and to support tools that can read `.d.ts` files.
Our goal is to keep these TypeScript definition files updated with each release for any public api.


### Pre-requisites
Before you can begin using these TypeScript definitions with your project, you need to make sure your project meets a few of these requirements:

 * Use latest version of TypeScript. We recommend 4.x+
 * Includes the TypeScript definitions for node. You can use npm to install this by typing the following into a terminal window:

    ```sh
    npm install --save-dev @types/node
    ```

 * If you are targeting at es5 or older ECMA standards, your `tsconfig.json` has to include `'es5'` and `'es2015.promise'` under `compilerOptions.lib`.


### In Node.js
To use the TypeScript definition files within a Node.js project, simply import `edns-sdk` as you normally would.

In a TypeScript file:

```javascript
// import entire SDK
import EDNS from '@edns/core';
// import EDNS object for custom features
import {EDNS} from '@edns/core';
```

**NOTE:** You need to add `"esModuleInterop": true` to compilerOptions of your `tsconfig.json`. If not possible, use like `import * as EDNS from '@edns/core'`.


# Getting Help
The best way to interact with our team is through GitHub or email.

# Contributing
We welcome community contributions and pull requests.

# More in [documentation](https://github.com/ednsdomains/edns-sdk/blob/main/doc/edns-sdk.md)
