// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

import "./Ownable.sol";

contract DocuMintToken is ERC1155, Ownable {
    string private _baseUri = "ipfs://";

    constructor(uint256 amount) ERC1155("https://my-api/token/{id}") {
        _mint(msg.sender, 1, 100, "");
        _mint(msg.sender, 2, 200, "");
    }

    // public function burn() {
    //   _burn(msg.sender, 1, 100);
    // }
    function burnBatch() public onlyOwner {
      // _burnBatch(msg.sender, [1, 2], [100, 200]);
    }
    function updateUri(uint256 id) public onlyOwner {
      // _setURI(_baseUri + Strings.toString(id));
    }
}
