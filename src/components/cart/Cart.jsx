import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../../state/actions";

const Cart = () => {
    const cartProducts = useSelector((state) => state.cart.cartProducts);

        return (
            <main className="container mx-auto">
                <h2 className="text-3xl font-light mb-4 font-barlow p-3">Shopping Cart</h2>
                <div>
                    {cartProducts.map((product) => (
                        <div key={product.id} className="mb-2">
                            <div className="flex items-center space-x-4">
                                <img src={product.image} alt={product.title} className="w-16 h-16 object-cover"/>
                                <div>
                                    <h3 className="font-bold">{product.title}</h3>
                                    <p className="text-gray-500">{product.category}</p>
                                    <p className="text-gray-700">Цена: ${product.price}</p>
                                    <p className="text-gray-700">Количество: {product.quantity}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        )
}


export default Cart;
