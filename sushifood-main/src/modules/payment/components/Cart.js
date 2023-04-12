import React, { useContext } from 'react'
import ItemCard from '../../common/components/ItemCard';
import CartContext from '../../store/cart-content'
import "../assets/Cart.css"

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const localData = cartCtx ? cartCtx : defaultCartState;
    return(
        <div>
            <div className="">
                <h2 className="text-lg font-semibold border-b w-100% pb-5"><b>YOUR ORDER</b></h2>
            </div>
            {localData.items.map(item => {
                // console.log(item.amount);
                return <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} amount={item.amount}/>
            })}
            <div className="line"></div>
            <div className='promo'>
                <input placeholder='Promocode' className='promo-input'/>
                <button className='promo-btn'>Apply</button>
            </div>
            <div className="dashed-line"></div>
            <div className='subtotal'>
                <div className='subtotal-text'>Subtotal</div>
                <div className='subtotal-price'>{Intl.NumberFormat().format(localData.totalAmount)} VND</div>
            </div>
            <div className='discount'>
                <div className='discount-text'>Discount</div>
                <div className='discount-price'>0 VND</div>
            </div>
            {/* <div className='discount'>
                <div className='discount-text'>Tax (4%)</div>
                <div className='discount-price'>+ {Intl.NumberFormat().format(localData.totalAmount*4/100)} VND</div>
            </div> */}
            <div className="dashed-line"></div>
            <div className='total'>
                <div className='total-text'><b>Total</b></div>
                <div className='total-price'><b>{Intl.NumberFormat().format(localData.totalAmount)} VND</b></div>
            </div>
            {/* <p className="text-lg font-semibold">{Intl.NumberFormat().format(localData.totalAmount)} VND</p> */}
        </div>
    );
}
export default Cart;