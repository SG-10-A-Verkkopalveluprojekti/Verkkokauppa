import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
// import SpecialCarousel from './Components/SpecialCarousel';
// import ProductCarousel1 from './Components/ProductCarousel1';
// import ProductCarousel2 from './Components/ProductCarousel2';
import Front from './Pages/front';
import TestPage from './Pages/testPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
          <Navbar />
            <Routes>
              <Route path='/testPage' exact element= {TestPage} />
            </Routes>
        </Router>
        <div className="container">
          <Front/>
        </div>
      <Footer/>
    </>
  );
}

export default App;
