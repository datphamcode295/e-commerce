import React, {useState} from 'react';
import AddProductPopup from "../../popup/AddProductPopup"
import '../assets/admin.css'

const AddProduct = (props) => {
    const [isOpenModal, setOpenModal] = useState(false);
    const onClose = () => {
        setOpenModal(false);
    }
    const onClick = () => {
        setOpenModal(true);
    }
    const onProductUpdate = () => {
        props.onProductUpdate();
    }
    return(
        <div>
            {/* <button onClick={onClick} className="add-btn">
                Add new product
            </button> */}
            <button className="add-btn" onClick={onClick}>
                <div className="plus">+</div>
                <div className="text">Add new dish</div>
            </button>
            <AddProductPopup onClose={onClose} isOpenModal={isOpenModal} onProductUpdate={onProductUpdate}/>
        </div>
    );
}
export default AddProduct