import './App.css';
import {Routes, Route} from 'react-router-dom';
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
        <Routes>
          <Route path="/shopping-cart" element={<ShopPage/>} />
          <Route path="/shopping-cart/product/:id" element={<ProductPage/>} />
          <Route path="/shopping-cart/cart" element={<CartPage/>} />
        </Routes>
  );
}

export default App;
