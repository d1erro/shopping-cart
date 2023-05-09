import { useSelector } from "react-redux";

const Cart = () => {
    const cartProducts = useSelector((state) => state.cartProducts);

    return (
        <div className="fixed top-0 right-0 h-full w-64 bg-white p-4">
            <h2 className="text-xl font-bold mb-4">Корзина</h2>
            <ul>
                {cartProducts.map((product) => (
                    <li key={product.id} className="mb-2">
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
