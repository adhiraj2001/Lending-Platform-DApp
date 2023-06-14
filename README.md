# Team 8
- [Adhiraj Deshmukh](https://github.com/adhiraj2001)
- [Yash Agrawal](https://github.com/yash8589)
- [Hariharan](https://github.com/hashtaghari)
- [Amey Kunte](https://github.com/ameykunte)

# Project Design

<p align ="center">
<img src="https://i.ibb.co/z54hX1v/Untitled-Workspace.png" alt="reva" border="0">
</p>

# Demonstration 

Demonstration of our Dapp is added to [this link](https://drive.google.com/file/d/1Nl1A1M9tSSSCcvrRiWKAgZ-b1Ne3qDAM/view?usp=sharing).

<div id="features" />

<!-- GETTING STARTED -->
# Features

* Borrowers can create their loan proposal with the amount they want, their favourable repayment due date and CID of their mortgage uploaded on IPFS.
> As of now we are using a decentralised public IPFS gateway. To use our DApp generate your file CID [here](https://www.dreamlink.cloud/) before adding it as a mortgage.
* Lender's can verify the borrower's data and send their proposal with their favourable interest rate.
* Borrower's can choose multiple lenders of their interest.
* Borrower can repay the loan anytime they want before the due date and amortized loan will be transacted.
* After the repayment date has passed, borrower cannot repay the loan and their mortgage will be revoked and auctioned off.

<div id="technologies-used" />

# Technologies, Libraries and Packages Used

1. Ethereum
2. Solidity
3. Truffle
4. MetaMask
5. JavaScript
6. Ganache
7. Web3
8. jQuery


<div id="local-setup" />

# Local Setup

> **Pre-Requisites**
> Ganache 
> MetaMask
> Truffle
1. Clone the repository
   ```sh
    git clone https://github.com/adhiraj2001/Lending-Platform-DApp.git && cd Lending-Platform-DApp/App
    ```
2. Open Ganache to run your local blockchain.
3. Run this command to build your smart contracts.
    ```sh
    truffle migrate --reset
    truffle test
    ```
4. Update your config.js present in frontend directory using abi and address present in build files.
5. Run on your local host and connect your wallet with metamask to perfrom the transactions.
