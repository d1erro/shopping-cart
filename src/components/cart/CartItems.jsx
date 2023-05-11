import React from "react";
import { addToCart, removeAllFromCart, removeOneFromCart } from "../../state/reducers";

const CartItems = ({ cartProducts, dispatch }) => {
    const handleRemoveOne = (product) => () => dispatch(removeOneFromCart(product.id));
    const handleAddOne = (product) => () => dispatch(addToCart(product));
    const handleRemoveAll = (product) => () => dispatch(removeAllFromCart(product));

    return (
        <section id="cart-products" className="mx-auto basis-5/6 xl:mr-5 xl:basis-3/4">
            {cartProducts.map((product) => (
                <div key={product.id} className="mb-2 first:border-t border-t last:border-b">
                    <div className="flex py-7">
                        <div className="border p-5 rounded">
                            <img className="w-28 overflow-hidden" src={product.image} alt={product.title} />
                        </div>
                        <div className="my-auto mx-5 basis-2/4">
                            <h3 className="font-bold">{product.title}</h3>
                            <p className="text-gray-500">{product.category}</p>
                            <p className="text-gray-700">${product.price}</p>
                        </div>
                        <div className="my-auto">
                            <div className="flex items-center">
                                <button
                                    className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
                                    onClick={handleRemoveOne(product)}
                                >
                                    -
                                </button>
                                <p className="text-gray-700 mx-4">{product.quantity}</p>
                                <button
                                    className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
                                    onClick={handleAddOne(product)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="ml-auto">
                            <button type="button" onClick={handleRemoveAll(product)} className="flex justify-end items-start">
                                <span className="invisible">Remove</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                    className="w-5 h-5 fill-gray-400 hover:fill-gray-500"
                                >
                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )};

export default CartItems;