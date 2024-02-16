import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from "./Components/Footer/Footer";
import banner_men from './Components/Assets/banner_mens.png';
import banner_women from './Components/Assets/banner_women.png';
import banner_kid from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Shop/>}/>
        <Route path = '/mens' element={<Shopcategory banner = {banner_men} category="men"/>}/>
        <Route path = '/womens' element={<Shopcategory banner = {banner_women} category="women"/>}/>
        <Route path = '/kids' element={<Shopcategory banner = {banner_kid} category="kid"/>}/>
        <Route path = '/product' element={<Product/>}>
           <Route path = ':productId' element={<Product/>}/>
        </Route>
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/login' element={<LoginSignup/>}/>
      </Routes>  
      </BrowserRouter> 
      <Footer/> 
    </div>
  );
}

export default App;
