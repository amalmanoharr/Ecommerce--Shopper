import './Navbar.css';
import React, { useContext, useState ,useRef} from 'react';
import logo from '../Assets/logo.png';
import cart_img from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/Shopcontext';
import nav_dropdown from '../Assets/nav_dropdown.png';
const Navbar = () => {
    const [menu,Setmenu] = useState('Shop');
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')

    }
    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <img src={logo} alt=""/>
                <p>SHOPPER</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt=""/>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{Setmenu('Shop')}}><Link style={{textDecoration:'None'}} to ='/'>Shop</Link>{menu==='Shop'?<hr/>:<></>}</li>
                <li onClick={()=>{Setmenu('Men')}}><Link style={{textDecoration:'None'}} to ='/mens'>Men</Link>{menu==='Men'?<hr/>:<></>}</li>
                <li onClick={()=>{Setmenu('Women')}}><Link style={{textDecoration:'None'}} to ='/womens'>Women</Link>{menu === 'Women'?<hr/>:<></>}</li>
                <li onClick={()=>{Setmenu('Kids')}}><Link style={{textDecoration:'None'}} to ='/kids'>Kids</Link>{menu === 'Kids'?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to = '/login'><button>Login</button></Link>}
                
                <Link to = '/cart'><img src={cart_img} alt=""/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        
        </div>
    )
}
export default Navbar;