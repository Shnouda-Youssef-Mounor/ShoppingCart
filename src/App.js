import{BrowserRouter as Router,Route,Routes}from "react-router-dom";
import { Navbar } from "./components/navbar";
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import './App.css';
import { ShopContextProvider } from "./context/shop-context";
import { CheckOut } from "./components/checkout";

function App() {
  return (
    <ShopContextProvider>
<div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<CheckOut/>}/>

          </Routes>
        </Router>
    </div>
    </ShopContextProvider>
    
  );
}

export default App;
