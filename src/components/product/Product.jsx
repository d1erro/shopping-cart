import React from 'react';
import {Link} from "react-router-dom";

const Product = ({product}) => {
    return (
        <Link key={product.id} to={'/shopping-cart/product/' + product.id} className="group">
            <div className="border p-3 rounded">
            <div className="w-40 h-40 p-1 mx-auto">
                <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-full h-full"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700 truncate overflow-ellipsis">{product.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
            </div>
            </Link>
    );
};

export default Product;