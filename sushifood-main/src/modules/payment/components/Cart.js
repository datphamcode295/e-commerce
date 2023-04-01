import React, { useContext } from 'react'
import ItemCard from '../../common/components/ItemCard';
import CartContext from '../../store/cart-content'

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const localData = cartCtx ? cartCtx : defaultCartState;
    return(
        <div>
            <div className="flex justify-between">
                <h2 className="text-lg font-semibold">YOUR ORDER</h2>
                <p className="text-lg font-semibold">{Intl.NumberFormat().format(localData.totalAmount)} VND</p>
            </div>
            {localData.items.map(item => {
                console.log(item.amount);
                return <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} amount={item.amount}/>
            })}
        </div>
    );
}
export default Cart;