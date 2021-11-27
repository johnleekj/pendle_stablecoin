import "./Loan.css"
import { useState, useEffect } from 'react';
import { ethers } from 'ethers'
import MockOT from '../../artifacts/contracts/MockOT.sol/MockOT.json'
import KhooleeCoinMinter from '../../artifacts/contracts/KhooleeCoinMinter.sol/KhooleeCoinMinter.json'
import VaultContract from '../../artifacts/contracts/VaultContract.sol/VaultContract.json'

// Update with the contract address logged out to the CLI when it was deployed 
const mockOTAddress = "0xE6E340D132b5f46d1e472DebcD681B2aBc16e57E"
const khooleeCoinminterAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
const vaultContractAddress = "0xc3e53F4d16Ae77Db1c982e75a937B9f60FE63690"
// const vaultContractOldAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
const Fee = 25;

export default function Loan() {
    const [collateral, setCollateralValue] = useState()
    const [khoolee, setKhoolee] = useState()
    const [mockOTwallet, setmockOTwallet] = useState();
    const [khooleeWallet, setkhooleeWallet] = useState(0);

    useEffect(() => {
        getMockOTValue();
        getKhooleeValue();
    })

    // request access to the user's MetaMask account
    async function requestAccount() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    // call mockOT smart contract, get mockOT value of acct
    async function getMockOTValue() {
        // check if MetaMask Account approved
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            // get contract from blockchain (JSON object)
            const contract = new ethers.Contract(mockOTAddress, MockOT.abi, provider)
            // console.log(contract)
            try {
                // get greeting
                const data = await contract.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
                
                setmockOTwallet(parseInt(data))
            } catch (err) {
                console.log("Error: ", err)
            }
        }    
    }

    // call khoolee smart contract, get khoolee value of acct
    async function getKhooleeValue() {
        // check if MetaMask Account approved
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            // get contract from blockchain (JSON object)
            const contract = new ethers.Contract(khooleeCoinminterAddress, KhooleeCoinMinter.abi, provider)
            // console.log(contract)
            try {
                const data = await contract.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
                
                setkhooleeWallet(parseInt(data));
            } catch (err) {
                console.log("Error: ", err)
            }
        }    
    }

    // call vault smart contract, trade in OT for khoolee coins
    async function borrowKhoolee() {
        // check if MetaMask Account approved
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            // get contract from blockchain (JSON object)
            const contract = new ethers.Contract(vaultContractAddress, VaultContract.abi, signer)
            const mockOTContract = new ethers.Contract(mockOTAddress, MockOT.abi, signer)
            const khooleeCoinMinter = new ethers.Contract(khooleeCoinminterAddress, KhooleeCoinMinter.abi, signer)
            // console.log(contract)
            try {
                // const data = await contract.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
                console.log("Starting borrow")
                // deposit collateral
                await mockOTContract.approve(vaultContractAddress, Fee+collateral)
                const transaction = await contract.addCollateral(collateral);
                await transaction.wait()
                console.log("Collateral submitted")
                // borrow khoolee coins

                await khooleeCoinMinter.grantRole(await khooleeCoinMinter.MINTER_ROLE(), vaultContractAddress);
                const transaction2 = await contract.borrowKhooleeCoins(khoolee);
                await transaction2.wait()
                console.log("trade in for khoolee succesful")
                await getKhooleeValue();
                
                console.log("Fin")
            } catch (err) {
                console.log("Error: ", err)
            }
        }    
    }

    // call vault smart contract, trade repay khoolee loan
    async function repayKhoolee() {
        // check if MetaMask Account approved
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            // get contract from blockchain (JSON object)
            const contract = new ethers.Contract(vaultContractAddress, VaultContract.abi, signer)
            const mockOTContract = new ethers.Contract(mockOTAddress, MockOT.abi, signer)
            const khooleeCoinMinter = new ethers.Contract(khooleeCoinminterAddress, KhooleeCoinMinter.abi, signer)
            // console.log(contract)
            try {
                
                const debt = await contract.getUserBorrowed("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
                // const debt = 20

                //approve
                await khooleeCoinMinter.approve(vaultContractAddress, debt)
                console.log("khoolee approved")
                //repay
                await contract.repayDebt()
                console.log("debt repaid")

                await getKhooleeValue()
            } catch (err) {
                console.log("Error: ", err)
            }
        }    
    }
    
    return (
        <div className="Loan-Component">
            <div className="lending-container">
                <div className="input-wrap">
                    <label>Deposit collateral</label>
                    <input onChange={e => setCollateralValue(e.target.value)} type="number" placeholder="0"></input>            
                </div>
                <div className="input-wrap">
                    <label>Borrow Khoolee</label>
                    <input onChange={e => setKhoolee(e.target.value)} type="number" placeholder="0"></input>            
                </div>
                </div>
                <div className="button-wrap">
                    <button onClick={() => { borrowKhoolee() }}>Borrow</button>
                    <button onClick={() => { repayKhoolee() }}>Repay</button>           
                </div>
            <div className="balances">
                <div className="value-wrap">
                    <p>mockOT: </p> <p>{mockOTwallet}</p>
                </div>
                <div className="value-wrap">
                    <p>khoolee: </p> <p>{khooleeWallet}</p>
                </div>
            </div>
            <p>{collateral}</p>
            <p>{khoolee}</p>
        </div>
    )
}