import React, {useEffect, useState } from 'react';
import * as api from '../../../utils/api/index.js';
import shippingCar from '../assets/shippingCar.png'
import openBox from '../assets/open-box.png'
import closeBox from '../assets/close-box.png'
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'
import PaymentPopup from "../../popup/PaymentPopup"
import { renderDateTime } from "../../common/components/renderDateTime"

import "../assets/ListUserOrder.css"
const ListUserOrders = () => {
  const [orders,setOrders] = useState([]);
  const [isOpenModal, setOpenModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(0);

  useEffect(async () => {
    const res = await api.OrderService.getOrderOfUser();
    setOrders(res);

  },[]);

  const openPayment = (orderId) => {
    const order = orders.find((order) => order._id === orderId);
    setSelectedPrice(order.OrderContent.TotalPrice);
    setSelectedItemId(orderId);
    setOpenModal(true);
  }

  const [detail, setDetail] = useState([])
  const [id, setId] = useState()
  const handleShowDetail = (orderId) => {
    const order = orders.find((order) => order._id === orderId);
    setId(orderId)
    setDetail(order.OrderContent.itemList)
  }

  return (
    <div>
      <h3 className= "pl-5" style ={{display: "flex"}}>Get Support:
        <button onClick={() => {
          const mail="mailto:support@esushi.io";
          window.open(mail, 'emailWindow');
        }}>
            <img className="px-7" style = {{height: "30px"}} src={mail} alt= "mail"/>
        </button>
        <a href="tel: 091-234-5678">
          <img style = {{height: "30px"}} src={phone} alt = "phone"/>
        </a>
      </h3>
      <div className='wrapper-listOrderUser'>
        <PaymentPopup orderPrice={selectedPrice} orderId={ selectedItemId } onClose={() => setOpenModal(false)} isOpenModal={isOpenModal} />
        {/* {orders.map(item => {
          return (
            <div className="mt-10 shadow-md" style={{ paddingBottom: "30px" }}>
              <div className="grid grid-cols-2 gap-4 py-3">
                <div className="grid grid-cols-5 gap-10">
                  <div className="col-span-2 m-auto">
                      {item.OrderStatus === "Delivering" ? 
                      <img src={shippingCar} alt = "Delivering"/>
                      :
                      <div>
                          {item.OrderStatus === "Packaging" ?
                          <img style= {{height: "160px"}} src={closeBox} alt="Packaging"/> :  <img style= {{height: "160px"}} src={openBox} alt= "Delivered"/>
                          }
                      </div>
                      }
                  </div>

                  <div className="col-span-3" style={{ fontFamily: "Alata" }}>
                    <div className="leading-10">
                      <p>Order ID: {item._id}</p>
                      <p>Recipient: {item.RecipientName}</p>
                      <p>Order date: {renderDateTime(item.OrderDate)}</p>
                      {!item.PaymentInfo.status ? ''
                        :
                        <div>
                          <p>Delivery address: {item.PaymentInfo.info}</p>
                          <p>Delivery fee: {item.PaymentInfo.deliveryFee}</p>
                        </div>
                      }
                      <p>Delivery status: {item.OrderStatus}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-10">
                  <div className="col-span-2"/>

                  <div className="col-span-3" style = {{fontFamily: "Alata"}}>
                    <h3 className= "pl-2" style ={{display: "flex"}}>Get Support:
                      <button onClick={() => {
                        const mail="mailto:support@esushi.io";
                        window.open(mail, 'emailWindow');
                      }}>
                          <img className = "px-7" style = {{height: "30px"}} src={mail} alt= "mail"/>
                      </button>
                      <a href="tel: 091-234-5678">
                        <img style = {{height: "30px"}} src={phone} alt = "phone"/>
                      </a>
                    </h3>

                    <h3 className = "pt-32 pl-2">Price: {Intl.NumberFormat().format(item.OrderContent.TotalPrice)} VND</h3>
                    <div style ={{width: "200px"}}>
                      {item.PaymentInfo.status === false ? 
                        <div>
                          <button 
                          className={`w-full bg-white py-2 pl-2 pr-3 border border-gray-300 rounded-md leading-5 text-gray-900 placeholder-gray-500 hover:bg-gray-900 hover:text-white sm:text-md my-7`}
                          onClick={() => openPayment(item._id)}
                          >
                            Add payment
                          </button>
                        </div>
                        :
                        <button 
                        className={`w-full bg-gray-900 py-2 pl-2 pr-3 border border-gray-300 rounded-md leading-5 text-white placeholder-gray-500 sm:text-md my-7`}
                        >
                          Paid
                        </button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })} */}

        <div className='wrapper-foodOrder'>
          <div className="heading"><b>Food Order</b></div>
          <div className="section">
            <div className="section-item"><b>Recipient</b></div>
            <div className="section-item"><b>Order date</b></div>
            <div className="section-item"><b>Price</b></div>
            <div className="section-item"><b>Address</b></div>
            <div className="section-item"><b>Status</b></div>
            <div className="section-item"><b>Payment status</b></div>
          </div>
          <div style={{maxHeight: '55vh', overflowY: 'scroll'}}>

            {orders.map((item, index) => {
              return (
                <div key={index} className='wrapper-foodOrderItem' onClick={() => handleShowDetail(item._id)}>
                  <div className="order-item">{item.RecipientName}</div>
                  <div className="order-item">{renderDateTime(item.OrderDate)}</div>
                  <div className="order-item">{Intl.NumberFormat().format(item.OrderContent.TotalPrice)} VND</div>
                  <div className="order-item">{item.PaymentInfo.info}</div>
                  <div className="order-item">
                    {item.OrderStatus === "Processing" ? 
                      <div className="processing">Processing</div>
                      :
                      <div>
                          {item.OrderStatus === "Packaging" ?
                            <div className="packaging">Packaging</div> 
                            : 
                            <div>
                              {item.OrderStatus === "Delivering" ?
                                <div className="delivering">Delivering</div> 
                                : 
                                <div className="complete">Completed</div> 
                              }
                            </div>
                          }
                      </div>
                    }
                  </div>
                  <div className="order-item">
                    {item.PaymentInfo.status === false ? 
                      <div>
                        <button 
                        className="unpaid-btn"
                        onClick={() => openPayment(item._id)}
                        >
                          Add payment
                        </button>
                      </div>
                      :
                      <button 
                      className="paid-btn"
                      >
                        Paid
                      </button>
                    }
                  </div>
                </div>
            
              )
            })}
          </div>
        </div>

        <div className="detail-order">
          <div className="heading-detail"><b>Detail Order</b></div>
          {detail.length !== 0 && <>
            <div className='detail-orderID-text'>Order ID</div>
            <div className='detail-orderID'><b>#{id}</b></div>
          </>}
          
          {detail?.map((item, index) => {
            return (
              <div key={index} className="detail-item">
                <div style={{width: '70%'}}>{item.ProductName}</div>
                <div>{item.Quantity} {item.Quantity > 1 ? ' items' : ' item'}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default ListUserOrders;