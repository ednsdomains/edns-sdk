
import { Addressable } from "ethers";

export interface AddressTypes {
    "Registry.Init": Addressable,
    "Registry.DiamondCutFacet"?: Addressable
    "Registry.DiamondLoupeFacet"?: Addressable,
    "Registry.AccessControlFacet"?: Addressable,
    "Registry.TldRecordFacet"?: Addressable,
    "Registry.DomainRecordFacet"?: Addressable,
    "Registry.HostRecordFacet"?: Addressable,
    "Registry.BaseRegistryFacet"?: Addressable,
    "Registry.Diamond"?: Addressable,
    "DefaultWrapper"?: Addressable,
    "PublicResolver"?: Addressable,
    "Registrar"?: Addressable,
    "Root"?: Addressable,
    "Token"?: Addressable,
    "ClassicalRegistrarController"?: Addressable,
    "UniversalRegistrarController"?: Addressable,
    "OmniRegistrarController"?: Addressable,
    "Portal"?: Addressable,
    "Bridge"?: Addressable,
    "Synchronizer"?: Addressable,
    "LayerZeroProvider"?: Addressable
}