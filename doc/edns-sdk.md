# EDNS SDK Documentation

## Overview
The EDNS SDK provides tools for interacting with EDNS smart contracts and resolver APIs. This document covers the usage of `DomainManager` and `RecordManager` classes.


## Table of Contents

### EDNS SDK Documentation
- [Overview](#overview)

## EDNS SDK Data Types Documentation

- [TypedText](#typedtext)
  - [Available TypedText Values](doc/types.md#available-typedtext-values)
- [TypedAddress](doc/types.md#typedaddress)
  - [Available TypedAddress Values](doc/types.md#available-typedaddress-values)
- [EdnsChainId](doc/types.md#ednschainid)
  - [Available EdnsChainId Values](doc/types.md#available-ednschainid-values)
- [RecordType](doc/types.md#recordtype)
  - [Available RecordType Values](doc/types.md#available-recordtype-values)
- [TypedRecordType](doc/types.md#typedrecordtype)
  - [Available TypedRecordType Values](doc/types.md#available-typedrecordtype-values)

### Domains
- [Getting Started DomainManager](doc/domains.md#Getting-Started)
- [Importing DomainManager](doc/domains.md#importing-domainmanager)
- [Class: DomainManager](doc/domains.md#class-domainmanager)
  - [Constructor](doc/domains.md#constructor)
  - [IsDomainAvailable](doc/domains.md#isdomainavailable)
  - [IsExist](doc/domains.md#isexist)
  - [GetOwner](doc/domains.md#getowner)
  - [GetExpiry](doc/domains.md#getexpiry)

### Records
- [Getting Started RecordManager](doc/records.md#Getting-Started)
- [Importing RecordManager](doc/records.md#importing-recordmanager)
- [Class: RecordManager](doc/records.md#class-recordmanager)
  - [Constructor](doc/records.md#constructor)
  - [GetAllRecords](doc/records.md#getallrecords)
  - [GetTextRecord](doc/records.md#gettextrecord)
  - [GetTypedTextRecord](doc/records.md#gettypedtextrecord)
  - [GetAddressRecord](doc/records.md#getaddressrecord)
  - [GetTypedAddressRecord](doc/records.md#gettypedaddressrecord)

This document covers basic usage and initialization of `DomainManager` and `RecordManager`. For more detailed information and advanced usage, refer to the official EDNS SDK documentation.