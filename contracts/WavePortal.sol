// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract wavePortal {
    uint256 totalwings;
    uint256 private seed;

    event Newwing(address indexed from, uint256 timestamp, string message);
    //address[] winger;
    struct Wing{
        address winger;
        string message;
        uint256 timestamp;
    }
    Wing[] wings;

    mapping(address => uint256) public lastWavedAt;

    constructor() payable{
        console.log('My name is  Optimus Prime, am a contract from smart');
        seed = (block.timestamp + block.difficulty) %100;
    }

    function wing(string memory _message) public{

          
        require(
            lastWavedAt[msg.sender] + 15 seconds < block.timestamp,
            "Wait 15 seconds before another wing"
        );
        lastWavedAt[msg.sender] = block.timestamp;

        totalwings +=1;
        console.log('%s has sent you some wings /w message %s  ', msg.sender, _message);


        wings.push(Wing(msg.sender, _message, block.timestamp));

        seed= (block.difficulty + block.timestamp + seed) % 100;

        console.log('random Number %d generated ', seed);
        if(seed <= 50){
           console.log('%s won', msg.sender);
           uint256 prizeAmount = 0.0001 ether;
        require(
        prizeAmount <= address(this).balance,'Trying to widthraw more oney than the contract has');
        (bool success, )= (msg.sender). call{value: prizeAmount}("");
        require(success, 'Failed to Widthraw Money from contract');
        //trying to widthraw more);


        } 
        emit Newwing(msg.sender, block.timestamp, _message);

        
    }

    function getAllWings() public view returns (Wing[] memory){
        return wings;

    }

    function getTotalWings() public view returns (uint256){
        console.log('We have %d total wings', totalwings);
        return totalwings;

    }
    // function setWinger() public{
    //     winger.push(msg.sender);
    // }

    // function getAllWingers() public  view returns (address[]){
    //     return winger; 

    // }


    
}
