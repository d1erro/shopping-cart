import React from 'react';

const Footer = () => {
    let today = new Date();
    let year = today.getFullYear();
    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto flex items-center justify-centeflex items-center justify-center py-3">
                <div className="text-base">Copyright © {year} Damir Gimazetdinov</div>
            </div>
        </footer>
    );
}

export default Footer;