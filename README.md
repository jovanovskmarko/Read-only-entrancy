# Hardhat Project
This project demonstrates a basic read-only reentrancy attack. It comes with a sample contract and a test for that contract.

## Read-only reentrancy attack

 After executing the test you can see that the reward is bigger due to the changed virtual price.

### 1. Fork the mainnet:

```
npx hardhat node
```
### 2. Compile contracts

```
npx hardhat compile
```
### 3. Run test

```
npx hardhat test
```
