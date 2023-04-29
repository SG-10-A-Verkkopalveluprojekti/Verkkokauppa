import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Components/Products';
// import SpecialCarousel from './Components/SpecialCarousel';
// import ProductCarousel1 from './Components/ProductCarousel1';
// import ProductCarousel2 from './Components/ProductCarousel2';
import Front from './Pages/front';
import ShowItem from './Pages/showItem';
import AddCategory from './Pages/AddingCategory';
import AddProduct from './Pages/addingProduct';
import TestPage from './Pages/testPage';
import Order from './Pages/order';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

const URL ='http://localhost:8000/';

function App() {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) + 1, product);
    } else {
      product['amount'] = 1;
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }

  return (
    <>
          <Navbar url={URL} />
          <Routes>
              <Route path="/"element={<Front/>}/>
              <Route path="/products/:categoryId" element={<Products url={URL}/>}/>
              <Route path="/search/:searchPhrase" element={<Products url={URL}/>}/>
              {/* en oo varma noist poluist et onko oikein */}
              <Route path="/products/:productId" element={<Products url={URL} addToCart={addToCart} />} />
              <Route path="/order" element={<Order
                url={URL}
                cart={cart} />}
              />
              <Route path="/showitem/:product_id"element={<ShowItem url={URL}/>}/>
              <Route path="/adminAddCategory"element={<AddCategory url={URL}/>}/>
              <Route path="/adminAddProduct"element={<AddProduct url={URL}/>}/>
            </Routes>
        <div className="container">
        </div>
      <Footer/>
    </>
  );
}

export default App;
