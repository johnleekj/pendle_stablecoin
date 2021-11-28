# Pendle stablecoin project
Worked on by 
- Lee Kai Jie, John 
- Khoo Chee Yang

## Understanding of the pendle stablecoin project
Our project has to enable users to deposit their pendle OT tokens as collateral and mint/borrow a stablecoin as a result. The deposited OT tokens will be locked up in VaultContract and can only be unlocked if all the borrowed stablecoins are repaid by the borrower.

## Stablecoin design
When exploring existing stablecoin mechanisms, we decided to model our stablecoin design after the Maker Protocol as it is able to issue the Dai stablecoin and facilitate collateral-backed loans without an intermediary. Therefore, we were inspired by the protocol and borrowed heavily from it. 

### Intro on KhooleeCoin (KLC), our stablecoin!
- Soft-pegged to USD
- Fully backed by collateral (Pendle’s OT token)
- We named it Khoolee by merging our surnames, Khoo and Lee, and have it act as a wordplay on ‘coolie’ as we wanted the stablecoin to work for the users in their investment strategies!

### Problems with designing a stablecoin
- How is the stability of KLC’s price relative to USD maintained?
- How is the stability of the stablecoin system maintained? (collateral value needs to be > value of KLC)

### The above problems are solved via the system’s 4 layers of defence
1. Supply and Demand (arbitrage)
2. Liquidity (take their collateral if things go south)
3. Pendle governance token (manages loan fees and used as a reserve to manage KLC supply)
4. Emergency shutdown

### Supply and Demand (arbitrage)
This layer aims to maintain the stability of KLC’s price as close to 1 USD. This pegging to 1 USD is achieved by giving incentives to different actors if they were to arbitrage.

If KLC > $1, people would be incentived to borrow KLC and sell it to the open market to profit from KLC’s additional value. By borrowing KLC, new KLC are minted, which increases the supply of KLC and causes KLC to drop back to $1. 

If KLC < $1, people would be incentivised to repay their KLC as the repaid KLC’s value is likely to be lesser that the value that they initially borrowed for. By repaying KLC, the repaid KLC are burned, which decreases the supply of KLC and causes KLC to increase back to $1. 

Therefore, the cryptoeconomics of the system will incentive the actors to help maintain the KLC’s peg of 1 USD.

### Liquidity (take their collateral if things go south)
This layer aims to ensure the system’s stability by ensuring collateral value > KLC value. If at any time the collateral value of the vault gets too close to it’s debt such that health factor < 1, the borrower’s collateral will be liquidated. 

### Pendle governance token (manages loan fees and used as a reserve to manage KLC supply)
This layer aims to ensure the system’s stability as well as maintain KLC’s price stability. Pendle governance token holders will enjoy a proportion of the fees paid by the borrowers. However, if KLC’s price is not pegged close enough to 1 USD, the system will mint additional pendle governance tokens to peg it back to 1 USD. Therefore, this risk makes it necessary for Pendle governance token holders to govern KLC’s price stability. 

### Emergency shutdown
This layer is used as a contingency plan in cases of extreme market irrationality, attacks etc. It will shutdown the system and ensure that vault users receive the assets they are entitled to. 

## Implemention
Below are the functionalities that we implemented for our project.

Users can borrow KLC by depositing their Pendle OT as collateral and paying a flat fee. Amount of KLC that can be borrowed is based on loan-to-value ratio. Borrower’s position will be over-collateralized. 

In order to retrieve collateral, the borrowed KLC needs to be repaid. 

Collateral can be topped up but it will incur a flat fee. 

If health factor < 1, borrower’s collateral will be liquidated. 

## Future plans
Implement
- Interest rate
- Emergency shutdown
- Governance token’s role in maintaining KLC’s price stability
- Price oracle
- Configurable risk parameters
- Allow for trustless minting by building KLC on top of DS token instead of erc20PresetMinter
