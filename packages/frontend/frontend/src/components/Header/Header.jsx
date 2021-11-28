import logo from '../../hide-the-pain.png';
import "./Header.css"
import { ethers } from 'ethers'
import MockOT from '../../artifacts/contracts/MockOT.sol/MockOT.json'
import KhooleeCoinMinter from '../../artifacts/contracts/KhooleeCoinMinter.sol/KhooleeCoinMinter.json'
import VaultContract from '../../artifacts/contracts/VaultContract.sol/VaultContract.json'

// Update with the contract address logged out to the CLI when it was deployed 
const mockOTAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
const khooleeCoinminterAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
const vaultContractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"

export default function Header() {

    // request access to the user's MetaMask account
    async function requestAccount() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    async function predemoSetup() {
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
        <div>
            <header className="App-header">
                <button className="hidethepain" onClick={() => { predemoSetup() }}><img src={logo} className="App-logo" alt="logo"/></button>
                <p>
                Input instructions here
                </p>
            </header>
        </div>
    )
}