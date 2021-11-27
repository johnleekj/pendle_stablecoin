import "./Loan.css"
import { useState, useEffect } from 'react';

// Update with the contract address logged out to the CLI when it was deployed 
const mockOTAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

export default function Loan() {
    const [collateral, setCollateralValue] = useState()
    const [khoolee, setKhoolee] = useState()
    const [mockOTwallet, setmockOTwallet] = useState();
    const [khooleeWallet, setkhooleeWallet] = useState();

    // useEffect(() => {
    //     alert('hello side effect');
    // })

    // request access to the user's MetaMask account
    async function requestAccount() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    // call mockOT smart contract, get mockOT value of acct
    // async function fetchGreeting() {
    //     // check if MetaMask Account approved
    //     if (typeof window.ethereum !== 'undefined') {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum)
    //     // get contract from blockchain (JSON object)
    //     const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
    //     // console.log(contract)
    //     try {
    //         // get greeting
    //         const data = await contract.greet()
    //         console.log('data: ', data)
    //     } catch (err) {
    //         console.log("Error: ", err)
    //     }
    //     }    
    // }
    
    return (
        <div className="Loan-Component">
            <div className="lending-container">
                <div className="input-wrap">
                    <label>Deposit collateral</label>
                    <input onChange={e => setCollateralValue(e.target.value)} type="number" placeholder="0"></input>            
                </div>
                <div className="input-wrap">
                    <label>Borrow Khoolee</label>
                    <input onChange={e => setKhoolee(e.target.value)} type="text" placeholder="0"></input>            
                </div>
                </div>
                <div className="button-wrap">
                    <button>Borrow</button>
                    <button>Repay</button>           
                </div>
            <div className="balances">
                <div className="value-wrap">
                    <p>mockOT: </p> <p>{mockOTwallet}</p>
                </div>
                <div className="value-wrap">
                    <p>khoolee: </p> <p>{khooleeWallet}</p>
                </div>
            </div>
        </div>
    )
}