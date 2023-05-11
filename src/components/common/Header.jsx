import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

const Header = () => {
    const cartProducts = useSelector((state) => state.cart.cartProducts);
    const cartProductsCount = cartProducts.length;

    return (
        <header className="p-4 bg-gray-100">
            <div className="container mx-auto flex items-center justify-between">
            <Link to="/shopping-cart"><div className="text-3xl font-bebas">Online Store</div></Link>
            <div className="flex-grow mx-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>

            <Link to="/shopping-cart/cart"><div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                <path/>
                </svg>
                {cartProductsCount !== 0 && (
                    <span className="bg-red-500 text-white text-[10px] font-bold rounded-full px-[5px] py-[1px] mb-5">
                        {cartProductsCount}
                    </span>
                )}
            </div></Link>
            </div>
        </header>
    );
}

export default Header;