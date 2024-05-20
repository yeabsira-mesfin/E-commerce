import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Menu, X} from 'react-feather';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl">E-commerce Site</h1>
        <nav>
            <div className="md:hidden">
                <button onClick={()=> setIsOpen(!isOpen)}>
                    {isOpen? <X/>: <Menu/>}
                </button>
            </div>
            <ul className={`md:flex ${isOpen ? 'block': 'hidden'}`}>
                <li className='p-2'><Link to="/">Home</Link></li>
                <li className='p-2'><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header