import React from 'react';

const OrderSummary = ({cartProducts}) => {

    const price = (product, quantity) => {
        return Math.ceil(product * quantity);
    }

    const totalPrice = cartProducts.reduce(
        (sum, product) => sum + Math.ceil(product.price * product.quantity),
        0
    );

    return (
        <section id="order-summary" className="basis-5/6 mx-auto mt-2 xl:basis-1/4 xl:mt-0">
            <div id="order-summary-bg" className="bg-gray-100 rounded">
                <div id="order-summary-content" className="p-5">
                    {cartProducts.map((product) => (
                        <div className="flex justify-between py-3 border-b">
                            <p className="basis-3/4">{product.title}</p>
                            <p className="basis-1/4 text-end font-bold">
                                ${price(product.price, product.quantity)}
                            </p>
                        </div>
                    ))}
                    <div className="flex justify-between mt-3 font-bold">
                        <p>Order total:</p>
                        <p>${totalPrice}</p>
                    </div>
                    <div className="text-center text-white">
                        <button className="bg-blue-500 rounded w-full py-2 mt-4">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderSummary;