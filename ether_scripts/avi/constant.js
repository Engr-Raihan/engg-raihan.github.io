const batch_avi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function MAX_SUPPLY() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const factory_avi = [
    "function batchRegistry() view returns (address)",

    "function createBatch(string memory name, uint256 maxSupply, uint256 expiration) returns (address)",

    "event BatchCreated(address indexed batch, string name, uint256 maxSupply, uint256 expiration)"
];

const registry_avi = [
    "function batchAddress(string) view returns (address)",
    "function uidClaimed(string) view returns (bool)",

    "function claimBatchToken(string memory name, string memory uid, address to, uint256 amount)",
    "function transferBulk(address to, address[] calldata tokens, uint256[] calldata amounts)",

    "event TokenClaimed(address indexed batch, address indexed to, string uid, uint256 amount)"
];

module.exports = { batch_avi, factory_avi, registry_avi }