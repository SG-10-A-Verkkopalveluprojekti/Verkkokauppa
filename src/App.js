import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SpecialCarousel from './Components/SpecialCarousel';
import ProductCarousel1 from './Components/ProductCarousel1';
import ProductCarousel2 from './Components/ProductCarousel2'

function App() {
  return (
    <>
      <Navbar/>
        <div className="container">
          <div className='row'>
            <div className='carousel-container'>
              <SpecialCarousel/>
            </div>
          </div>
          <div className='row'>
            <div className='products'>
              <div className='row' id='itemRow1'>
                <ProductCarousel1/>
              </div>
              <div className='row' id='itemRow2'>
                <ProductCarousel2/>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  );
}

export default App;
