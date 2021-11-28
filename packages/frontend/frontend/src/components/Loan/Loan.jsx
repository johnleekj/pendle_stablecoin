import "./Loan.css"
import { useState, useEffect } from 'react';
import { ethers } from 'ethers'
import MockOT from '../../artifacts/contracts/MockOT.sol/MockOT.json'
import KhooleeCoinMinter from '../../artifacts/contracts/KhooleeCoinMinter.sol/KhooleeCoinMinter.json'
import VaultContract from '../../artifacts/contracts/VaultContract.sol/VaultContract.json'

// Update with the contract address logged out to the CLI when it was deployed 
const mockOTAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
const khooleeCoinminterAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
const vaultContractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"

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
                // console.log("Starting borrow")
                // deposit collateral
                await mockOTContract.approve(vaultContractAddress, Fee+collateral)
                const transaction = await contract.addCollateral(collateral);
                await transaction.wait()
                // console.log("Collateral submitted")
                // borrow khoolee coins

                const transaction2 = await contract.borrowKhooleeCoins(khoolee);
                await transaction2.wait()
                // console.log("trade in for khoolee succesful")
                await getKhooleeValue();
                // console.log("update khooleevalue")
                
                // console.log("Fin")
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

                //approve
                await khooleeCoinMinter.approve(vaultContractAddress, debt)
                console.log("khoolee approved")
                //repay
                const transaction = await contract.repayDebt()
                await transaction.wait()
                console.log("debt repaid")

                await getKhooleeValue()
                console.log("update khooleevalue")
            } catch (err) {
                console.log("Error: ", err)
            }
        }    
    }

    async function predemosetup() {
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
                await khooleeCoinMinter.grantRole(await khooleeCoinMinter.MINTER_ROLE(), vaultContractAddress);
                console.log("Minter role set")
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
                    <button className="loan-buttons" onClick={() => { borrowKhoolee() }}>Borrow</button>
                    <button className="loan-buttons" onClick={() => { repayKhoolee() }}>Repay</button>           
                </div>
            <div className="balances">
                <div className="value-wrap">
                    <p>mockOT: </p> <p>{mockOTwallet}</p>
                </div>
                <div className="value-wrap">
                    <p>khoolee: </p> <p>{khooleeWallet}</p>
                </div>
            </div>
            {/* <p>{collateral}</p>
            <p>{khoolee}</p> */}
        </div>
    )
}