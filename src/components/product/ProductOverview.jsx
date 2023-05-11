import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../state/reducers";

export default function ProductOverview({id}) {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.cartProducts);
    let isProductInCart = false;

    (function isCurrentProductInCart(){
        if (getQuantityCurrentProduct() > 0) isProductInCart = true;
    })();

    function getQuantityCurrentProduct() {
        // eslint-disable-next-line
        const currentProduct = products.find((product) => product.id == id);
        if (currentProduct) return currentProduct.quantity;
    }

    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then(res=>res.json())
            .then(data=>setProduct(data))
            .catch((error) => console.error(error));
    })

    return (
        <main className="container mx-auto">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li key={product.id}>
                                <div className="flex items-center">
                                    <p className="mr-2 text-sm font-small text-gray-400">
                                        Category: {product.category}
                                    </p>
                                </div>
                            </li>
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto max-w-xs">
                    <div className="">
                        <img
                            src={product.image}
                            alt={product.id}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>

                        <div className="mt-10">
                            <button
                                type="submit"
                                className="flex justify-center mt-10 w-full rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => dispatch(addToCart(product))}
                            >
                                <p className="">Add to cart</p>
                                {isProductInCart && (
                                    <span className="ml-5 my-auto bg-red-500 text-[15px] rounded-xl px-[7px] py-[0.4px]">
                                    {getQuantityCurrentProduct()}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}