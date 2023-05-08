import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-100">
            <a href="/"><div className="text-3xl font-bebas">Online Store</div></a>
            <div className="flex-grow mx-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                <path/>
                </svg>
            </div>
        </header>
    );
}

export default Header;