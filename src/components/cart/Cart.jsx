import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";

const Cart = () => {
    const cartProducts = useSelector((state) => state.cart.cartProducts);
    const dispatch = useDispatch();
    const isCartEmpty = cartProducts.length === 0;
    const showContent = () => {
        if (!isCartEmpty) {
            return (
                <>
                    <CartItems cartProducts={cartProducts} dispatch={dispatch} />
                    <OrderSummary cartProducts={cartProducts} dispatch={dispatch} />
                </>
            );
        } else {
           return <p className="mx-auto">Cart is empty</p>
        }
    };

    return (
        <main className="container mx-auto">
            <h2 className="font-inter text-xl font-bold p-3 text-center">Shopping Cart</h2>
            <div className="flex flex-wrap xl:flex-nowrap">
                {showContent()}
            </div>
        </main>
    );
};

export default Cart;