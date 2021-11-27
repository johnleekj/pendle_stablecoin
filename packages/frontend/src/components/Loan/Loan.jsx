import "./Loan.css"
import { useState } from 'react';

export default function Loan() {
    const [collateral, setCollateralValue] = useState()
    const [khoolee, setKhoolee] = useState()
    const [mockOTwallet, setmockOTwallet] = useState(500);
    const [khooleeWallet, setkhooleeWallet] = useState(500);
    return (
        <div className="Loan-Component">
            <div className="lending-container">
                <div className="input-wrap">
                    <label>Deposit collateral</label>
                    <input type="text" placeholder="0"></input>            
                </div>
                <div className="input-wrap">
                    <label>Borrow Khoolee</label>
                    <input type="text" placeholder="0"></input>            
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
