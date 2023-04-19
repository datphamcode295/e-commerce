import React, { useState, useEffect } from 'react';
import * as api from '../../../utils/api/index.js';
import shippingCar from '../assets/shippingCar.png'
import phone from '../assets/phone.png'
import ItemDropdown from "./ItemDropdown"
import openBox from '../assets/open-box.png'
import closeBox from '../assets/close-box.png'
import { renderDateTime } from "../../common/components/renderDateTime"
import '../assets/ListOrder.css'

const ListOrders = () => {
  const [orders,setOrders] = useState([]);

  useEffect(async () => {
    const res = await api.OrderService.getAllOrder();
    setOrders(res);
  },[]);

  const [detail, setDetail] = useState()
  const handleShowDetail = (orderId) => {
    const order = orders.find((order) => order._id === orderId);
    console.log(order)
    setDetail(order)
  }
  return (
    <div className='wrapper-listOrder'>
      {/* {orders.map((item, index) => {
        return (
          <div key={index} className="mt-10 shadow-md" style={{ paddingBottom: "30px" }}>
            <div className="grid grid-cols-2 gap-4 py-3">
              <div className="grid grid-cols-5 gap-10 border-r-2 border-gray-900">
                <div className="col-span-2 m-auto">
                  {item.OrderStatus === "Delivering" ? 
                    <img src={shippingCar}/>
                    :
                    <div>
                        {item.OrderStatus === "Packaging" ?
                        <img style= {{height: "160px"}} src={closeBox}/> :  <img style= {{height: "160px"}} src={openBox}/>
                        }
                    </div>
                  }
                </div>

                <div className="col-span-3" style={{ fontFamily: "Alata" }}>
                  <div className="leading-10">
                    <p>Order ID: {item._id}</p>
                    <p>Order date: {renderDateTime(item.OrderDate)}</p>
                    {item.PaymentInfo.status === false ? 
                      <div/>
                      :
                      <p>Delivery address: {item.PaymentInfo.info}</p>
                    }
                    <div className="flex">
                      <p className="mr-4">Delivery status:</p>
                      <ItemDropdown id={item._id} status={item.OrderStatus} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-10">
                <div className="col-span-3 leading-10" style={{ fontFamily: "Alata" }}>
                  <p>Customer Name: {item.CustomerName}</p>
                  <p>Recipient Name: {item.RecipientName}</p>
                  <p>Contact Number: (+84) {item.ContactNumber}</p>
                  {!item.PaymentInfo.status? ''
                    :
                    <p>Delivery fee: {item.PaymentInfo.deliveryFee}</p>
                  }
                </div>
                <div className="col-span-2">
                  <a href={`tel: ${item.ContactNumber}`}>
                    <img className = "mt-14 ml-10" style={{ maxWidth: "50px", paddingBottom: "20px" }} src={phone} alt = "phone"/>
                  </a>
                  <p>Price: {Intl.NumberFormat().format(item.OrderContent.TotalPrice)} VND</p>
                </div>
              </div>
            </div>
          </div>
        )
      })} */}
      <div className='wrapper-foodOrder-listOrder'>
        <div className="heading-listOrder"><b>Food Order</b></div>
        <div className="section-listOrder">
          <div className="section-item-listOrder"></div>
          <div className="section-item-listOrder"><b>Customer</b></div>
          <div className="section-item-listOrder"><b>Order date</b></div>
          <div className="section-item-listOrder"><b>Address</b></div>
          <div className="section-item-listOrder"><b>Status</b></div>
        </div>
        <div style={{maxHeight: '55vh', overflowY: 'scroll'}}>
          {orders.map((item, index) => {
            return (
              <div key={index} className='wrapper-foodOrderItem-listOrder' onClick={() => handleShowDetail(item._id)}>
                <div className="order-item-listOrder">{index + 1}</div>
                <div className="order-item-listOrder">{item.CustomerName}</div>
                <div className="order-item-listOrder">{renderDateTime(item.OrderDate)}</div>
                <div className="order-item-listOrder">{item.PaymentInfo.info}</div>
                <div className="order-item-listOrder">
                  <ItemDropdown id={item._id} status={item.OrderStatus} />
                </div>
              
              </div>
            )
          })}
        </div>
      </div>

      <div className="detail-order-listOrder">
        <div className="heading-detail-listOrder"><b>Detail Order</b></div>
        {detail &&
          <>
            {/* {detail?.map((item, index) => {
              return (
                <div key={index} className="detail-item-listOrder">
                  <div style={{width: '70%'}}>{item.ProductName}</div>
                  <div>{item.Quantity} {item.Quantity > 1 ? ' items' : ' item'}</div>
                </div>
              )
            })} */}
    
            <div className='heading-detail-text'>
              <div>
                <div className='detail-orderID-text'>Order ID</div>
                <div className='detail-orderID'><b>#{detail._id}</b></div>
              </div>
              <div>
                <div className='detail-orderID-text'>Total</div>
                <div className='detail-orderID'><b>{Intl.NumberFormat().format(detail.OrderContent.TotalPrice + detail.PaymentInfo.deliveryFee)} VND</b></div>
              </div>
            </div>

            <div className='heading-detail-text'>
              <div className='detail-orderID-text'>Recipient</div>
              <div className='detail-orderID'>{detail.RecipientName}</div>
            </div>

            <div className='heading-detail-menu'>
              <div className='detail-orderID-text'>Menu</div>
            </div>
            {detail.OrderContent.itemList.map((item, index) => (
              <div key={index}>
                {/* <div className='detail-orderID'>{item.ProductName}</div> */}
                <div className='heading-detail-menu'>
                  <div className='detail-menu-name'>{item.ProductName}</div>
                  <div className='detail-orderID'>{item.Quantity} {item.Quantity > 1 ? ' items' : ' item'}</div>
                </div>
              </div>
              
            ))}

            <div className='heading-detail-text'>
              <div className='detail-orderID-text'>Delivery fee</div>
              <div className='detail-orderID'>{Intl.NumberFormat().format(detail.PaymentInfo.deliveryFee)} VND</div>
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default ListOrders;