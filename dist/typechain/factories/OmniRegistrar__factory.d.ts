import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OmniRegistrar, OmniRegistrarInterface } from "../OmniRegistrar";
export declare class OmniRegistrar__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OmniRegistrar>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OmniRegistrar;
    connect(signer: Signer): OmniRegistrar__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50613eb0806100206000396000f3fe608060405234801561001057600080fd5b506004361061028a5760003560e01c806370a082311161015c578063a753e303116100ce578063ccc494af11610087578063ccc494af146105c8578063d547741f146105db578063d6bddcdc146105ee578063dd4984cb1461061c578063e985e9c514610624578063fae9e1b41461066057600080fd5b8063a753e30314610520578063af610fc11461057c578063b7bae9b71461058f578063b88d4fde146105a2578063c0f64d071461030c578063c87b56dd146105b557600080fd5b80638f90a72f116101205780638f90a72f1461052057806391ba75ef1461053357806391d148541461054657806395d89b4114610559578063a217fddf14610561578063a22cb4651461056957600080fd5b806370a082311461048857806375b238fc1461049b5780637e8c7f08146104b05780638760e68d146104d75780638d91177a1461050d57600080fd5b8063299a8ddb11610200578063485cc955116101b9578063485cc95514610421578063529abdf51461043457806355f804b31461044757806363259d041461045a5780636352211e1461046d5780636464e58f1461048057600080fd5b8063299a8ddb146103af5780632f2ff15d146103c257806336568abe146103d557806338a699a4146103e85780633f744c15146103fb57806342842e0e1461040e57600080fd5b8063117f8fc111610252578063117f8fc11461031f57806312abf4f714610340578063156105011461035357806315ed87151461036657806323b872dd14610379578063248a9ca31461038c57600080fd5b806301ffc9a71461028f57806306fdde03146102b7578063081812fc146102cc578063095ea7b3146102f75780630c92b3de1461030c575b600080fd5b6102a261029d366004613219565b610673565b60405190151581526020015b60405180910390f35b6102bf610684565b6040516102ae919061328e565b6102df6102da3660046132a1565b610716565b6040516001600160a01b0390911681526020016102ae565b61030a6103053660046132cf565b6107a3565b005b6102a261031a36600461339e565b6108b9565b61033261032d366004613426565b6108cc565b6040519081526020016102ae565b6102a261034e366004613449565b6108eb565b61030a61036136600461347e565b610986565b61030a6103743660046134f6565b610a80565b61030a610387366004613574565b610ac5565b61033261039a3660046132a1565b60009081526097602052604090206001015490565b6102df6103bd3660046135b5565b610af6565b61030a6103d0366004613619565b610b4b565b61030a6103e3366004613619565b610b71565b6102a26103f63660046132a1565b610bef565b6102a26104093660046135b5565b610c21565b61030a61041c366004613574565b610cc4565b61030a61042f366004613649565b610cdf565b61030a610442366004613685565b610dab565b61030a610455366004613449565b610e82565b61030a61046836600461347e565b610ee6565b6102df61047b3660046132a1565b610f24565b610332602081565b6103326104963660046136de565b610f9b565b610332600080516020613e5b83398151915281565b6103327f79e553c6f53701daa99614646285e66adb98ff0fcc1ef165dd2718e5c873bee681565b6102a26104e5366004613619565b6001600160a01b0316600090815260c960209081526040808320938352929052205460ff1690565b61030a61051b3660046136fb565b611022565b6102a261052e3660046135b5565b611060565b61030a6105413660046134f6565b61106b565b6102a2610554366004613619565b6111af565b6102bf6111da565b610332600081565b61030a610577366004613768565b6111e9565b61033261058a3660046135b5565b6111f4565b6102a261059d3660046135b5565b611290565b61030a6105b0366004613796565b6112e5565b6102bf6105c33660046132a1565b611317565b6103326105d63660046135b5565b6113a1565b61030a6105e9366004613619565b61143b565b6102a26105fc3660046132cf565b60c960209081526000928352604080842090915290825290205460ff1681565b610332600581565b6102a2610632366004613649565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b61030a61066e3660046136fb565b611461565b600061067e82611523565b92915050565b60606065805461069390613802565b80601f01602080910402602001604051908101604052809291908181526020018280546106bf90613802565b801561070c5780601f106106e15761010080835404028352916020019161070c565b820191906000526020600020905b8154815290600101906020018083116106ef57829003601f168201915b5050505050905090565b600061072182611548565b6107875760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152606960205260409020546001600160a01b031690565b60006107ae82610f24565b9050806001600160a01b0316836001600160a01b0316141561081c5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161077e565b336001600160a01b038216148061083857506108388133610632565b6108aa5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161077e565b6108b48383611565565b505050565b60006108c4846115d3565b949350505050565b60006108df60ff83166301e13380613853565b63ffffffff1692915050565b60006108f68261186f565b801561067e575060ca548251602084012060405163782722f960e11b81526001600160a01b039092169163f04e45f2916109369160040190815260200190565b60206040518083038186803b15801561094e57600080fd5b505afa158015610962573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067e919061387f565b815160208084019190912033600090815260c983526040808220838352909352919091205460ff166109ca5760405162461bcd60e51b815260040161077e9061389c565b6109d58484846118c1565b60cc546040516001600160a01b0390911690637eefcfa2906109ff908790879087906024016138c5565b60408051601f198184030181529181526020820180516001600160e01b031663517ad5a360e01b1790525160e083901b6001600160e01b0319168152610a48919060040161328e565b600060405180830381600087803b158015610a6257600080fd5b505af1158015610a76573d6000803e3d6000fd5b5050505050505050565b60cc546001600160a01b0316336001600160a01b031614610ab35760405162461bcd60e51b815260040161077e90613903565b610abf84848484611af8565b50505050565b610acf3382611e14565b610aeb5760405162461bcd60e51b815260040161077e9061392e565b6108b4838383611efa565b60008083604051806040016040528060018152602001601760f91b81525084604051602001610b279392919061399b565b6040516020818303038152906040528051906020012060001c90506108c481610f24565b600082815260976020526040902060010154610b678133612096565b6108b483836120fa565b6001600160a01b0381163314610be15760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161077e565b610beb8282612180565b5050565b60ca54604051630e29a66960e21b8152600481018390526000916001600160a01b0316906338a699a490602401610936565b6000610c2d83836121e7565b8015610cbd575060ca548251602084012060405163782722f960e11b81526001600160a01b039092169163f04e45f291610c6d9160040190815260200190565b60206040518083038186803b158015610c8557600080fd5b505afa158015610c99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbd919061387f565b9392505050565b6108b4838383604051806020016040528060008152506112e5565b600054610100900460ff16610cfa5760005460ff1615610cfe565b303b155b610d615760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161077e565b600054610100900460ff16158015610d83576000805461ffff19166101011790555b610d8c8361228c565b610d9582612316565b80156108b4576000805461ff0019169055505050565b610dd57f79e553c6f53701daa99614646285e66adb98ff0fcc1ef165dd2718e5c873bee6336111af565b610e0d5760405162461bcd60e51b815260206004820152600960248201526813d3931657d493d3d560ba1b604482015260640161077e565b6001600160a01b038216600090815260c960209081526040808320865187840120845290915290819020805460ff1916831515179055517f8744db86e29037d0275dc84bc7cd04a6178a6cb470354711fcd0dbeed9cf0a2f90610e75908590859085906139de565b60405180910390a1505050565b610e9a600080516020613e5b833981519152336111af565b610ed35760405162461bcd60e51b815260206004820152600a60248201526927a7262cafa0a226a4a760b11b604482015260640161077e565b8051610beb9060cb90602084019061316a565b60cc546001600160a01b0316336001600160a01b031614610f195760405162461bcd60e51b815260040161077e90613903565b6108b48383836118c1565b6000818152606760205260408120546001600160a01b03168061067e5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161077e565b60006001600160a01b0382166110065760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161077e565b506001600160a01b031660009081526068602052604090205490565b60cc546001600160a01b0316336001600160a01b0316146110555760405162461bcd60e51b815260040161077e90613903565b6108b4838383612346565b6000610cbd836126d6565b825160208085019190912033600090815260c983526040808220838352909352919091205460ff166110af5760405162461bcd60e51b815260040161077e9061389c565b6110b98585610c21565b6110f55760405162461bcd60e51b815260206004820152600d60248201526c4e4f545f415641494c41424c4560981b604482015260640161077e565b61110185858585611af8565b60cc546040516001600160a01b0390911690637eefcfa29061112d908890889088908890602401613a11565b60408051601f198184030181529181526020820180516001600160e01b03166315ed871560e01b1790525160e083901b6001600160e01b0319168152611176919060040161328e565b600060405180830381600087803b15801561119057600080fd5b505af11580156111a4573d6000803e3d6000fd5b505050505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606066805461069390613802565b610beb3383836128b8565b60ca5482516020808501919091208351918401919091206040516360bd4af760e11b81526000936001600160a01b03169263c17a95ee9261124092600401918252602082015260400190565b60206040518083038186803b15801561125857600080fd5b505afa15801561126c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbd9190613a53565b60008083604051806040016040528060018152602001601760f91b815250846040516020016112c19392919061399b565b6040516020818303038152906040528051906020012060001c90506108c481611548565b6112ef3383611e14565b61130b5760405162461bcd60e51b815260040161077e9061392e565b610abf84848484612987565b606061132282611548565b6113615760405162461bcd60e51b815260206004820152601060248201526f544f4b454e5f4e4f545f45584953545360801b604482015260640161077e565b60cb4661136f3060146129ba565b61137885612b56565b60405160200161138b9493929190613a6c565b6040516020818303038152906040529050919050565b60006113ac836126d6565b6113ee5760405162461bcd60e51b8152602060048201526013602482015272494e56414c49445f444f4d41494e5f4e414d4560681b604482015260640161077e565b82604051806040016040528060018152602001601760f91b8152508360405160200161141c9392919061399b565b60408051601f1981840301815291905280516020909101209392505050565b6000828152609760205260409020600101546114578133612096565b6108b48383612180565b815160208084019190912033600090815260c983526040808220838352909352919091205460ff166114a55760405162461bcd60e51b815260040161077e9061389c565b6114b0848484612346565b60cc546040516001600160a01b0390911690637eefcfa2906114da90879087908790602401613b6f565b60408051601f198184030181529181526020820180516001600160e01b03166344d93c6f60e11b1790525160e083901b6001600160e01b0319168152610a48919060040161328e565b60006001600160e01b03198216637965db0b60e01b148061067e575061067e82612c54565b6000908152606760205260409020546001600160a01b0316151590565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061159a82610f24565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000602082511015806115e857506005825111155b6116255760405162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be988a9c8ea8960931b604482015260640161077e565b6000805b835181101561186557606160f81b6001600160f81b03191684828151811061165357611653613ba5565b01602001516001600160f81b0319161080159061169e5750603d60f91b6001600160f81b03191684828151811061168c5761168c613ba5565b01602001516001600160f81b03191611155b806117105750600360fc1b6001600160f81b0319168482815181106116c5576116c5613ba5565b01602001516001600160f81b031916108015906117105750603960f81b6001600160f81b0319168482815181106116fe576116fe613ba5565b01602001516001600160f81b03191611155b806117485750602d60f81b6001600160f81b03191684828151811061173757611737613ba5565b01602001516001600160f81b031916145b806117805750605f60f81b6001600160f81b03191684828151811061176f5761176f613ba5565b01602001516001600160f81b031916145b806117b85750601760f91b6001600160f81b0319168482815181106117a7576117a7613ba5565b01602001516001600160f81b031916145b6117d45760405162461bcd60e51b815260040161077e90613bbb565b6001600160f81b03198216601760f91b14801561181357508381815181106117fe576117fe613ba5565b01602001516001600160f81b03198381169116145b156118305760405162461bcd60e51b815260040161077e90613bbb565b83818151811061184257611842613ba5565b01602001516001600160f81b03191691508061185d81613be6565b915050611629565b5060019392505050565b60006118818280519060200120610bef565b801561067e575060ca548251602084012060405163082c8b8f60e11b81526001600160a01b0390921691631059171e916109369160040190815260200190565b600083604051806040016040528060018152602001601760f91b815250846040516020016118f19392919061399b565b6040516020818303038152906040528051906020012060001c9050816001600160a01b031661191f82610f24565b6001600160a01b0316146119615760405162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015260640161077e565b835160208086019190912084519185019190912060ca5460405163267ede3360e21b815260048101849052602481018390526001600160a01b03909116906399fb78cc9060440160206040518083038186803b1580156119c057600080fd5b505afa1580156119d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119f8919061387f565b611a355760405162461bcd60e51b815260206004820152600e60248201526d1113d350525397d156141254915160921b604482015260640161077e565b60ca54865160208089019190912087519188019190912060405163569cd59560e01b8152600481019290925260248201526001600160a01b0386811660448301529091169063569cd59590606401600060405180830381600087803b158015611a9d57600080fd5b505af1158015611ab1573d6000803e3d6000fd5b505050507f1b662a7ca5b3c0f19821dfb98f29f54b3fb5035ea903b4abb8e9b8b9c2646dca868686604051611ae8939291906138c5565b60405180910390a1505050505050565b611b01846126d6565b611b435760405162461bcd60e51b8152602060048201526013602482015272494e56414c49445f444f4d41494e5f4e414d4560681b604482015260640161077e565b611b4d8484610c21565b611b905760405162461bcd60e51b8152602060048201526014602482015273444f4d41494e5f4e4f545f415641494c41424c4560601b604482015260640161077e565b60ca60009054906101000a90046001600160a01b03166001600160a01b031663a06db7dc6040518163ffffffff1660e01b815260040160206040518083038186803b158015611bde57600080fd5b505afa158015611bf2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c169190613a53565b611c209042613c01565b60ca60009054906101000a90046001600160a01b03166001600160a01b031663a06db7dc6040518163ffffffff1660e01b815260040160206040518083038186803b158015611c6e57600080fd5b505afa158015611c82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ca69190613a53565b611cb08342613c01565b611cba9190613c01565b11611cfc5760405162461bcd60e51b815260206004820152601260248201527111155490551253d397d513d3d7d4d213d49560721b604482015260640161077e565b600084604051806040016040528060018152602001601760f91b81525085604051602001611d2c9392919061399b565b60408051601f19818403018152919052805160209091012090506000611d528342613c01565b9050611d5d82611548565b15611d6b57611d6b82612ca4565b611d758483612d3f565b60ca5460405162ada9c760e51b81526001600160a01b03909116906315b538e090611dad908990899089906000908890600401613c19565b600060405180830381600087803b158015611dc757600080fd5b505af1158015611ddb573d6000803e3d6000fd5b505050507ffe9df7f05cf5b8b9e2400cd57a9cb53b8fd66ec53120a4092c5b95b1e9c316f186868684604051611ae89493929190613a11565b6000611e1f82611548565b611e805760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161077e565b6000611e8b83610f24565b9050806001600160a01b0316846001600160a01b03161480611ec65750836001600160a01b0316611ebb84610716565b6001600160a01b0316145b806108c457506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff166108c4565b826001600160a01b0316611f0d82610f24565b6001600160a01b031614611f715760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161077e565b6001600160a01b038216611fd35760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161077e565b611fde600082611565565b6001600160a01b0383166000908152606860205260408120805460019290612007908490613c63565b90915550506001600160a01b0382166000908152606860205260408120805460019290612035908490613c01565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6120a082826111af565b610beb576120b8816001600160a01b031660146129ba565b6120c38360206129ba565b6040516020016120d4929190613c7a565b60408051601f198184030181529082905262461bcd60e51b825261077e9160040161328e565b61210482826111af565b610beb5760008281526097602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561213c3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61218a82826111af565b15610beb5760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60004260ca60009054906101000a90046001600160a01b03166001600160a01b031663a06db7dc6040518163ffffffff1660e01b815260040160206040518083038186803b15801561223857600080fd5b505afa15801561224c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122709190613a53565b61227a85856111f4565b6122849190613c01565b109392505050565b600054610100900460ff166122b35760405162461bcd60e51b815260040161077e90613cef565b6122bc81612e72565b61230b604051806040016040528060118152602001704f6d6e69204e616d65205365727669636560781b815250604051806040016040528060048152602001634f4d4e5360e01b815250612f1b565b612313612f4c565b50565b600054610100900460ff1661233d5760405162461bcd60e51b815260040161077e90613cef565b61231381612f75565b825160208085019190912083519184019190912060ca546040516360bd4af760e11b815260048101849052602481018390526000916001600160a01b03169063c17a95ee9060440160206040518083038186803b1580156123a657600080fd5b505afa1580156123ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123de9190613a53565b90504260ca60009054906101000a90046001600160a01b03166001600160a01b031663a06db7dc6040518163ffffffff1660e01b815260040160206040518083038186803b15801561242f57600080fd5b505afa158015612443573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124679190613a53565b6124719083613c01565b10156124b05760405162461bcd60e51b815260206004820152600e60248201526d1113d350525397d156141254915160921b604482015260640161077e565b60ca60009054906101000a90046001600160a01b03166001600160a01b031663a06db7dc6040518163ffffffff1660e01b815260040160206040518083038186803b1580156124fe57600080fd5b505afa158015612512573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125369190613a53565b6125409085613c01565b60ca60009054906101000a90046001600160a01b03166001600160a01b031663a06db7dc6040518163ffffffff1660e01b815260040160206040518083038186803b15801561258e57600080fd5b505afa1580156125a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125c69190613a53565b6125d08684613c01565b6125da9190613c01565b101561261d5760405162461bcd60e51b815260206004820152601260248201527111155490551253d397d513d3d7d4d213d49560721b604482015260640161077e565b60ca546001600160a01b0316631180db9d848461263a8886613c01565b6040516001600160e01b031960e086901b168152600481019390935260248301919091526044820152606401600060405180830381600087803b15801561268057600080fd5b505af1158015612694573d6000803e3d6000fd5b505050507f41e707b19d6d161859c7adef9cc43ac830e6146e5126a6d95e1bb9d3cad0fb34868686846126c79190613c01565b604051611ae893929190613b6f565b6000602082511080156126ea575060058251115b6127275760405162461bcd60e51b815260206004820152600e60248201526d0929cac8298aa88be988a9c8ea8960931b604482015260640161077e565b60005b82518110156128af57606160f81b6001600160f81b03191683828151811061275457612754613ba5565b01602001516001600160f81b0319161080159061279f5750603d60f91b6001600160f81b03191683828151811061278d5761278d613ba5565b01602001516001600160f81b03191611155b806128115750600360fc1b6001600160f81b0319168382815181106127c6576127c6613ba5565b01602001516001600160f81b031916108015906128115750603960f81b6001600160f81b0319168382815181106127ff576127ff613ba5565b01602001516001600160f81b03191611155b806128495750602d60f81b6001600160f81b03191683828151811061283857612838613ba5565b01602001516001600160f81b031916145b806128815750605f60f81b6001600160f81b03191683828151811061287057612870613ba5565b01602001516001600160f81b031916145b61289d5760405162461bcd60e51b815260040161077e90613bbb565b806128a781613be6565b91505061272a565b50600192915050565b816001600160a01b0316836001600160a01b0316141561291a5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161077e565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b612992848484611efa565b61299e84848484612fbe565b610abf5760405162461bcd60e51b815260040161077e90613d3a565b606060006129c9836002613d8c565b6129d4906002613c01565b67ffffffffffffffff8111156129ec576129ec6132fb565b6040519080825280601f01601f191660200182016040528015612a16576020820181803683370190505b509050600360fc1b81600081518110612a3157612a31613ba5565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110612a6057612a60613ba5565b60200101906001600160f81b031916908160001a9053506000612a84846002613d8c565b612a8f906001613c01565b90505b6001811115612b07576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110612ac357612ac3613ba5565b1a60f81b828281518110612ad957612ad9613ba5565b60200101906001600160f81b031916908160001a90535060049490941c93612b0081613dab565b9050612a92565b508315610cbd5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161077e565b606081612b7a5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115612ba45780612b8e81613be6565b9150612b9d9050600a83613dd8565b9150612b7e565b60008167ffffffffffffffff811115612bbf57612bbf6132fb565b6040519080825280601f01601f191660200182016040528015612be9576020820181803683370190505b5090505b84156108c457612bfe600183613c63565b9150612c0b600a86613dec565b612c16906030613c01565b60f81b818381518110612c2b57612c2b613ba5565b60200101906001600160f81b031916908160001a905350612c4d600a86613dd8565b9450612bed565b60006001600160e01b031982166380ac58cd60e01b1480612c8557506001600160e01b03198216635b5e139f60e01b145b8061067e57506301ffc9a760e01b6001600160e01b031983161461067e565b6000612caf82610f24565b9050612cbc600083611565565b6001600160a01b0381166000908152606860205260408120805460019290612ce5908490613c63565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6001600160a01b038216612d955760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161077e565b612d9e81611548565b15612deb5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161077e565b6001600160a01b0382166000908152606860205260408120805460019290612e14908490613c01565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600054610100900460ff16612e995760405162461bcd60e51b815260040161077e90613cef565b60ca80546001600160a01b0319166001600160a01b038316179055612ecd600080516020613e5b83398151915260006130cb565b612ef87f79e553c6f53701daa99614646285e66adb98ff0fcc1ef165dd2718e5c873bee660006130cb565b612f03600033613116565b612313600080516020613e5b83398151915233613116565b600054610100900460ff16612f425760405162461bcd60e51b815260040161077e90613cef565b610beb8282613120565b600054610100900460ff16612f735760405162461bcd60e51b815260040161077e90613cef565b565b600054610100900460ff16612f9c5760405162461bcd60e51b815260040161077e90613cef565b60cc80546001600160a01b0319166001600160a01b0392909216919091179055565b60006001600160a01b0384163b156130c057604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290613002903390899088908890600401613e00565b602060405180830381600087803b15801561301c57600080fd5b505af192505050801561304c575060408051601f3d908101601f1916820190925261304991810190613e3d565b60015b6130a6573d80801561307a576040519150601f19603f3d011682016040523d82523d6000602084013e61307f565b606091505b50805161309e5760405162461bcd60e51b815260040161077e90613d3a565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506108c4565b506001949350505050565b600082815260976020526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b610beb82826120fa565b600054610100900460ff166131475760405162461bcd60e51b815260040161077e90613cef565b815161315a90606590602085019061316a565b5080516108b49060669060208401905b82805461317690613802565b90600052602060002090601f01602090048101928261319857600085556131de565b82601f106131b157805160ff19168380011785556131de565b828001600101855582156131de579182015b828111156131de5782518255916020019190600101906131c3565b506131ea9291506131ee565b5090565b5b808211156131ea57600081556001016131ef565b6001600160e01b03198116811461231357600080fd5b60006020828403121561322b57600080fd5b8135610cbd81613203565b60005b83811015613251578181015183820152602001613239565b83811115610abf5750506000910152565b6000815180845261327a816020860160208601613236565b601f01601f19169290920160200192915050565b602081526000610cbd6020830184613262565b6000602082840312156132b357600080fd5b5035919050565b6001600160a01b038116811461231357600080fd5b600080604083850312156132e257600080fd5b82356132ed816132ba565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261332257600080fd5b813567ffffffffffffffff8082111561333d5761333d6132fb565b604051601f8301601f19908116603f01168101908282118183101715613365576133656132fb565b8160405283815286602085880101111561337e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000606084860312156133b357600080fd5b833567ffffffffffffffff808211156133cb57600080fd5b6133d787838801613311565b945060208601359150808211156133ed57600080fd5b6133f987838801613311565b9350604086013591508082111561340f57600080fd5b5061341c86828701613311565b9150509250925092565b60006020828403121561343857600080fd5b813560ff81168114610cbd57600080fd5b60006020828403121561345b57600080fd5b813567ffffffffffffffff81111561347257600080fd5b6108c484828501613311565b60008060006060848603121561349357600080fd5b833567ffffffffffffffff808211156134ab57600080fd5b6134b787838801613311565b945060208601359150808211156134cd57600080fd5b506134da86828701613311565b92505060408401356134eb816132ba565b809150509250925092565b6000806000806080858703121561350c57600080fd5b843567ffffffffffffffff8082111561352457600080fd5b61353088838901613311565b9550602087013591508082111561354657600080fd5b5061355387828801613311565b9350506040850135613564816132ba565b9396929550929360600135925050565b60008060006060848603121561358957600080fd5b8335613594816132ba565b925060208401356135a4816132ba565b929592945050506040919091013590565b600080604083850312156135c857600080fd5b823567ffffffffffffffff808211156135e057600080fd5b6135ec86838701613311565b9350602085013591508082111561360257600080fd5b5061360f85828601613311565b9150509250929050565b6000806040838503121561362c57600080fd5b82359150602083013561363e816132ba565b809150509250929050565b6000806040838503121561365c57600080fd5b8235613667816132ba565b9150602083013561363e816132ba565b801515811461231357600080fd5b60008060006060848603121561369a57600080fd5b833567ffffffffffffffff8111156136b157600080fd5b6136bd86828701613311565b93505060208401356136ce816132ba565b915060408401356134eb81613677565b6000602082840312156136f057600080fd5b8135610cbd816132ba565b60008060006060848603121561371057600080fd5b833567ffffffffffffffff8082111561372857600080fd5b61373487838801613311565b9450602086013591508082111561374a57600080fd5b5061375786828701613311565b925050604084013590509250925092565b6000806040838503121561377b57600080fd5b8235613786816132ba565b9150602083013561363e81613677565b600080600080608085870312156137ac57600080fd5b84356137b7816132ba565b935060208501356137c7816132ba565b925060408501359150606085013567ffffffffffffffff8111156137ea57600080fd5b6137f687828801613311565b91505092959194509250565b600181811c9082168061381657607f821691505b6020821081141561383757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff808316818516818304811182151516156138765761387661383d565b02949350505050565b60006020828403121561389157600080fd5b8151610cbd81613677565b6020808252600f908201526e27a7262cafa1a7a72a2927a62622a960891b604082015260600190565b6060815260006138d86060830186613262565b82810360208401526138ea8186613262565b91505060018060a01b0383166040830152949350505050565b60208082526011908201527027a7262cafa9aca721a42927a724ad22a960791b604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008151613991818560208601613236565b9290920192915050565b600084516139ad818460208901613236565b8451908301906139c1818360208901613236565b84519101906139d4818360208801613236565b0195945050505050565b6060815260006139f16060830186613262565b6001600160a01b0394909416602083015250901515604090910152919050565b608081526000613a246080830187613262565b8281036020840152613a368187613262565b6001600160a01b0395909516604084015250506060015292915050565b600060208284031215613a6557600080fd5b5051919050565b600080865481600182811c915080831680613a8857607f831692505b6020808410821415613aa857634e487b7160e01b86526022600452602486fd5b818015613abc5760018114613acd57613afa565b60ff19861689528489019650613afa565b60008d81526020902060005b86811015613af25781548b820152908501908301613ad9565b505084890196505b50602f60f81b86526001860195508a8652613b5f613b46613b33613b40613b33613b2d868c01602f60f81b815260010190565b8f61397f565b602f60f81b815260010190565b8c61397f565b6c36b2ba30b230ba30973539b7b760991b8152600d0190565b9c9b505050505050505050505050565b606081526000613b826060830186613262565b8281036020840152613b948186613262565b915050826040830152949350505050565b634e487b7160e01b600052603260045260246000fd5b60208082526011908201527024a72b20a624a22fa1a420a920a1aa22a960791b604082015260600190565b6000600019821415613bfa57613bfa61383d565b5060010190565b60008219821115613c1457613c1461383d565b500190565b60a081526000613c2c60a0830188613262565b8281036020840152613c3e8188613262565b6001600160a01b03968716604085015294909516606083015250608001529392505050565b600082821015613c7557613c7561383d565b500390565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351613cb2816017850160208801613236565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351613ce3816028840160208801613236565b01602801949350505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6000816000190483118215151615613da657613da661383d565b500290565b600081613dba57613dba61383d565b506000190190565b634e487b7160e01b600052601260045260246000fd5b600082613de757613de7613dc2565b500490565b600082613dfb57613dfb613dc2565b500690565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090613e3390830184613262565b9695505050505050565b600060208284031215613e4f57600080fd5b8151610cbd8161320356fea49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a2646970667358221220f9c023be63068c868d907fd496aa7ab3705186481a9c9ea4bb8f3445973a527664736f6c63430008090033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): OmniRegistrarInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OmniRegistrar;
}