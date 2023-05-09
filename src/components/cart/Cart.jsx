import React, {useState} from 'react';

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);

    function addToCart(product) {
        setCartProducts(prevProduct => prevProduct.concat(product));
        console.log(cartProducts);
    }

    return (
        <div>

        </div>
    );
};

export default Cart;