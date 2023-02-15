import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footerpage from './Components/Footer';
import Contact from './Components/Contact';
import Products from './Components/Products';
import Loginpage from './Components/Loginpage';
import Registrationpage from './Components/Registrationpage';
import Details from './Components/Details';


function App() {

  return (
    <>
      <Navbar/>
      
      
      <div className='container1' my-3>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/login" element={<Loginpage/>} />
          <Route path="/register" element={<Registrationpage/>} />
          <Route path="/details/:id"  element={<Details/>} />

        </Routes>
      </div>
      <Footerpage/>
    </>
  );
}

export default App;
