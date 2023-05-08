import React from 'react';

const Footer = () => {
    let today = new Date();
    let year = today.getFullYear();
    return (
        <footer className="flex items-center justify-center h-16 py-4 bg-gray-100">
            <div className="text-base">Copyright © {year} Damir Gimazetdinov</div>
        </footer>
    );
}

export default Footer;