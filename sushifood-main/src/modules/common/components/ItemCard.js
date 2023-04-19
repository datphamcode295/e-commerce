import React, { useEffect, useState, useContext } from 'react';
import Sushi from '../assets/salmonSushi.jpg';
import CartContext from '../../store/cart-content';
import * as api from '../../../utils/api/index.js';
import "../assets/ItemCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const ItemCard = (props) => {
    const [product,setProduct] = useState([]);

    const cartCtx = useContext(CartContext);
    const removeFormCartHandler = () =>{
        cartCtx.removeItem(props.id);
    }
    const addToCartHandler = () => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: 1,
        })
    }
    const removeAllFromCartHandler = () =>{
        cartCtx.removeAll(props.id);
    }

    useEffect(async () => {
        const res = await api.ProductService.getProduct(props.id);
        setProduct(res);
      },[]);

    return(
        // <div className="mt-4 grid grid-cols-6 gap-3" style={{fontFamily: 'Source Sans Pro'}}>
        //     <img src={product.image} alt = "product" className='product-image'/>
        //     <div className="product-name-ingredients">
        //         <p>{props.name}</p>
        //         <p className="pt-1">{Intl.NumberFormat().format(props.price)} VND</p>
        //     </div>
        //     <div className="col-span-2">
        //         <div className="flex justify-end">
        //             <button onClick={removeFormCartHandler} className="rounded-full border border-black px-2.5 py-0.5 mr-2 ">
        //                 -
        //             </button>
        //             <p>{props.amount}</p>
        //             <button onClick={addToCartHandler} className="rounded-full border border-black px-2.5 py-0.5 ml-2">
        //                 +
        //             </button>
        //         </div>
        //         <p onClick={removeAllFromCartHandler} className="mt-4 text-right text-xs text-gray-400 cursor-pointer">REMOVE</p>
        //     </div>
        // </div>

        <div className='wrapper-itemCard'>
            <img src={product.image} alt = "product" className='product-image'/>
            <div className="product-name-ingredients">
                <p className='product-name'><b>{props.name}</b></p>
                <p className='product-ingredients'>{product.ingredients}</p>
            </div>
            <div className='product-price-info'>
                <div className="product-price-btn">
                    <button onClick={removeFormCartHandler} className="adjust-btn">
                        <FontAwesomeIcon icon={faMinus}/>
                    </button>
                    <p>{props.amount}</p>
                    <button onClick={addToCartHandler} className="adjust-btn">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <p className="product-price"><b>{Intl.NumberFormat().format(props.price)} VND</b></p>
                <div className="product-price-remove">
                    <FontAwesomeIcon icon={faTrash} onClick={removeAllFromCartHandler}/>
                </div>
            </div>
        </div>
    );
}
export default ItemCard;