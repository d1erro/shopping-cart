import './App.css';
import {Routes, Route, BrowserRouter, HashRouter} from 'react-router-dom';
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
      <HashRouter>
          <Routes>
            <Route exact path="/" element={<ShopPage/>} />
            <Route exact path="/product/:id" element={<ProductPage/>} />
          </Routes>
      </HashRouter>
  );
}

export default App;
