import React, { useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline';
import CartContext from '../../store/cart-content';
import "../assets/ItemView.css"
const ItemView = (props) => {
    const cartCtx = useContext(CartContext);
    const addToCart = () => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: 1,
            ingredients: props.ingredients
        })
    }
    return(
        // <div className="m-auto md:w-80">
        //     <div className="flex justify-center md:h-72">
        //         <img src={props.img} alt={props.name}/>
        //     </div>    
        //     <div className="flex justify-end mb-2">
        //         <button type="button" className="p-1 text-black-400 hover:text-gray-400">
        //             <ShoppingCartIcon onClick={addToCart} className="h-6 w-6" aria-hidden="true" />
        //         </button>
        //     </div>
        //     <div className="flex justify-between">
        //         <p className="font-medium">{props.name} ({props.quantity} pcs)</p>
        //         <p className="font-light sm:text-sm text-red-400">{Intl.NumberFormat().format(props.price)}VND</p>
        //     </div>
        // </div>

        <div className="wrapper-itemView">
            <div className="img">
                <img src={props.img} alt={props.name}/>
            </div>
            <div className="name"><b>{props.name}</b></div>
            <p className="ingredients">{props.ingredients}</p>
            <div className="price-cart">
                <div className="price">{Intl.NumberFormat().format(props.price)} VND</div>
                <ShoppingCartIcon onClick={addToCart} className="cart-logo" aria-hidden="true" />
            </div>
        </div>
    );
}
export default ItemView;