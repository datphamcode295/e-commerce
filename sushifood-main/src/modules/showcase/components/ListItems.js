import React, {useState, useEffect} from 'react';
import Item from './Item';
import * as api from '../../../utils/api/index.js';
import "./ListItem.css"
 
const ListItems = () => {

    const [sushiItems,setSushiItem] = useState([]);

    useEffect(async () => {
        const res = await api.ProductService.getAllProduct();
        setSushiItem(res);
    },[]);
    
    return(
        <div className="list">
            {sushiItems.map(item=>{
                return <Item 
                    key={item._id}
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    amount={item.amount}
                    img={process.env.PUBLIC_URL + item.image}
                    ingredients={item.ingredients}
                />
            })}
        </div>
    );
}
export default ListItems;