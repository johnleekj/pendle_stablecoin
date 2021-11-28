import "./Liquidity.css"
import { useState, useEffect } from 'react';
import { ethers } from 'ethers'
import MockOT from '../../artifacts/contracts/MockOT.sol/MockOT.json'
import KhooleeCoinMinter from '../../artifacts/contracts/KhooleeCoinMinter.sol/KhooleeCoinMinter.json'
import VaultContract from '../../artifacts/contracts/VaultContract.sol/VaultContract.json'

const mockOTAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
const khooleeCoinminterAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
const vaultContractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"

export default function Liquidity() {
    const [collateral, setCollateral] = useState(200)
    const [healthFactor, setHealthFactor] = useState(200)
    const [liquidated, setLiquidated] = useState(false)

    // request access to the user's MetaMask account
    async function requestAccount() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    // async function simulatePositive() {
    //     setCollateral(collateral + 100)
    //     setHealthFactor(healthFactor + 100)
    // }

    async function simulateNegative() {
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
                
                const transaction = await contract.removeCollateral(5);
                await transaction.wait();
                
                await fetchCollateral();
                await fetchHealthFactor();
            } catch (err) {
                console.log("Error: ", err)
            }
        } 
    }

    async function fetchCollateral() {
        // check if MetaMask Account approved
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            // get contract from blockchain (JSON object)
            const contract = new ethers.Contract(vaultContractAddress, VaultContract.abi, provider)
            // console.log(contract)
            try {
                // get greeting
                const data = await contract.getUserCollateral("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
            
                await setCollateral(parseInt(data));                
            } catch (err) {
                console.log("Error: ", err)
            }
        }  
        // setCollateral(400);
    }

    async function fetchHealthFactor() {
        // check if MetaMask Account approved
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            // get contract from blockchain (JSON object)
            const contract = new ethers.Contract(vaultContractAddress, VaultContract.abi, provider)
            // console.log(contract)
            try {
                // get greeting
                const data = await contract.returnHealthFactor();
                console.log(parseInt(data))
                await setHealthFactor(parseInt(data))              
            } catch (err) {
                console.log("Error: ", err)
            }
        }
    }

    useEffect(() => {
        fetchCollateral();
        fetchHealthFactor();
    }, [])

    useEffect(() => {
        if (healthFactor < 100) {
            console.log("GGWP")
            setLiquidated(true);
        } 
        else if (healthFactor > 100 & liquidated) {
            setLiquidated(false);
        }
    }, [healthFactor])
    return (
        <div className="Liquidity-Component">
            <div className="labels">
                <div className="label-text">
                    <p>Total Vault Collateral</p>
                    <p>{collateral}</p>
                    <div className="collateral-buttons">
                        {/* <button onClick={() => { simulatePositive() }}>Simulate Positive Volatility</button> */}
                        <button onClick={() => { simulateNegative() }}>Simulate Negative -5 Volatility</button>
                    </div>
                </div>
                <div className="health-text">
                    <p>Health Factor</p>
                    <p>{healthFactor}</p>
                    {liquidated && <span>Collateral has been liquidated</span>}
                </div>                           
            </div>
        </div>
    )
}
