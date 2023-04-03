import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Components/Products';
// import SpecialCarousel from './Components/SpecialCarousel';
// import ProductCarousel1 from './Components/ProductCarousel1';
// import ProductCarousel2 from './Components/ProductCarousel2';
import Front from './Pages/front';
import ShowItem from './Pages/showItem';
import TestPage from './Pages/testPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const URL ='http://localhost:8000/';

function App() {
  return (
    <>
          <Navbar url={URL} />
          <Routes>
              <Route path="/"element={<Front/>}/>
              <Route path="/showitem"element={<ShowItem/>}/>
              <Route path="/components/processors"element={<TestPage/>}/>
              <Route path="/components/motherboards"element={<TestPage/>}/>
              <Route path="/components/graphic_cards"element={<TestPage/>}/>
              <Route path="/components/hard_disks"element={<TestPage/>}/>
              <Route path="/components/power_supplies"element={<TestPage/>}/>
              <Route path="/components/memory"element={<TestPage/>}/>
              <Route path="/components/coolers"element={<TestPage/>}/>
              <Route path="/components/cases"element={<TestPage/>}/>
              <Route path="/screens"element={<TestPage/>}/>
              <Route path="/keyboards"element={<TestPage/>}/>
              <Route path="/mouses"element={<TestPage/>}/>
            </Routes>
        <div className="container">
        </div>
      <Footer/>
    </>
  );
}

export default App;
