import { ethers } from "ethers";
export interface AddressTypes {
  "Registry.Init": string;
  "Registry.DiamondCutFacet"?: string;
  "Registry.DiamondLoupeFacet"?: string;
  "Registry.AccessControlFacet"?: string;
  "Registry.TldRecordFacet"?: string;
  "Registry.DomainRecordFacet"?: string;
  "Registry.HostRecordFacet"?: string;
  "Registry.BaseRegistryFacet"?: string;
  "Registry.Diamond"?: string;
  DefaultWrapper?: string;
  PublicResolver?: string;
  Registrar?: string;
  Root?: string;
  Token?: string;
  ClassicalRegistrarController?: string;
  UniversalRegistrarController?: string;
  OmniRegistrarController?: string;
  Portal?: string;
  Bridge?: string;
  Synchronizer?: string;
  LayerZeroProvider?: string;
}
