import logo from '../../logo.svg';
import "./Header.css"

export default function Header() {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Input instructions here
                </p>
            </header>
        </div>
    )
}
