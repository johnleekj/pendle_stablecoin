import './App.css';
import Header from './components/Header/Header';
import Liquidity from './components/Liquidity/Liquidity';
import Loan from './components/Loan/Loan';

function App() {
  return (
    <div className="App">
      <Header/>
      <Loan />
      <Liquidity />
    </div>
  );
}

export default App;