import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartModal from '../pages/shop/CartModal';

const Navbar = () => {

    const products = useSelector((state) => state.cart.products);
    const[isCartOpen, setisCartOpen] = useState(false);
        const handleCartOpenToggle = () => {
            setisCartOpen(!isCartOpen)
        }

  return (
    <header className='fixed-nav-bar w-nav'>
        <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center'>
            <ul className='nav__links'>
                <li className='link'><Link to ="/">Home</Link></li>
                <li className='link'><Link to ="/shop">Shop</Link></li>
                <li className='link'><Link to ="/pages">Pages</Link></li>
                <li className='link'><Link to ="/contact">Contact</Link></li>
            </ul>

            {/* logo */}
            <div className='nav__logo'>
                <Link to="/">Lebaba<span>.</span></Link>
            </div>

            {/* Nav Icon */}
            <div className='nav__icons relative'>
                <span>
                    <Link to="/search">
                        <i className="ri-search-line"></i>
                    </Link>
                </span>
                <span>
                    <button onClick={handleCartOpenToggle} className='hover:text-primary'>
                        <i className="ri-shopping-bag-line"></i>
                        <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center'>{products.length}</sup>
                    </button>
                </span>
                <span>
                    <Link to='login'>
                        <i className="ri-user-line"></i>
                    </Link>
                </span>
            </div>
        </nav>
        {
            isCartOpen && <CartModal products={products} isOpen={isCartOpen} onClose={handleCartOpenToggle}/>
        }
    </header>
  )
}

export default Navbar