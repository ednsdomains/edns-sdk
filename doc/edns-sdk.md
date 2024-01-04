# EDNS SDK Documentation

## Overview
The EDNS SDK provides tools for interacting with EDNS smart contracts and resolver APIs. This document covers the usage of `DomainManager` and `RecordManager` classes.


## Table of Contents

### EDNS SDK Documentation
- [Overview](#overview)

## EDNS SDK Data Types Documentation

- [TypedText](#typedtext)
  - [Available TypedText Values](types.md#available-typedtext-values)
- [TypedAddress](types.md#typedaddress)
  - [Available TypedAddress Values](types.md#available-typedaddress-values)
- [EdnsChainId](types.md#ednschainid)
  - [Available EdnsChainId Values](types.md#available-ednschainid-values)
- [RecordType](types.md#recordtype)
  - [Available RecordType Values](types.md#available-recordtype-values)
- [TypedRecordType](types.md#typedrecordtype)
  - [Available TypedRecordType Values](types.md#available-typedrecordtype-values)

### Domains
- [Getting Started DomainManager](domains.md#Getting-Started)
- [Importing DomainManager](domains.md#importing-domainmanager)
- [Class: DomainManager](domains.md#class-domainmanager)
  - [Constructor](domains.md#constructor)
  - [IsDomainAvailable](domains.md#isdomainavailable)
  - [IsExist](domains.md#isexist)
  - [GetOwner](domains.md#getowner)
  - [GetExpiry](domains.md#getexpiry)

### Records
- [Getting Started RecordManager](records.md#Getting-Started)
- [Importing RecordManager](records.md#importing-recordmanager)
- [Class: RecordManager](records.md#class-recordmanager)
  - [Constructor](records.md#constructor)
  - [GetAllRecords](records.md#getallrecords)
  - [GetTextRecord](records.md#gettextrecord)
  - [GetTypedTextRecord](records.md#gettypedtextrecord)
  - [GetAddressRecord](records.md#getaddressrecord)
  - [GetTypedAddressRecord](records.md#gettypedaddressrecord)

This document covers basic usage and initialization of `DomainManager` and `RecordManager`. For more detailed information and advanced usage, refer to the official EDNS SDK documentation.