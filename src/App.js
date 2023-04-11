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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const URL ='http://localhost:8000/';

function App() {
  return (
    <>
          <Navbar url={URL} />
          <Routes>
              <Route path="/"element={<Front/>}/>
              <Route path="/products/:categoryId" element={<Products url={URL}/>}/>
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
