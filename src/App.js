import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import CoinDetail from './component/CoinDetail/CoinDetail';
import Coins from './component/Coins/Coins';
import BdAddress from './component/Contact/BdAddress';
import Contact from './component/Contact/Contact';
import UsAddress from './component/Contact/UsAddress';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import HomePage from './component/HomePage/HomePage';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/coins-Detail/:id" element={<CoinDetail></CoinDetail>}></Route>
        <Route path="/contact" element={<Contact></Contact>}>
          <Route path="usAddress" element={<UsAddress></UsAddress>}></Route>
          <Route path="BdAddress" element={<BdAddress></BdAddress>}></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
