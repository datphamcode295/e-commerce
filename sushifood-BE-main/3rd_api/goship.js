import axios from 'axios';
import { goshipUrl, goshipToken } from '../config.js';

const parcel = {
  cod: 0,
  width: 10,
  height: 10,
  length: 10,
  weight: 100,
}

const address_from = {
  city_code: "700000",
  district_code: "701100",
  ward_id: "9168",
  street: "79/M2 Âu Cơ",
  latitude: 0,
  longitude: 0
};

const picker = {
  name: "Phạm Văn Đạt",
  phone: "0941734232"
}

const receiver = {
  name: "Phạm Văn Đạt",
  phone: "0941734232"
}

export const requestFees = async (cityId, districtId, wardId) => {
  // try{
  //   let goshipReply = await axios.post(`https://api.goship.io/api/v1/fees-list`, {
  //   shipment: {
  //     address_from,
  //     address_to: {
  //       city_code: cityId,
  //       district_code: districtId,
  //       ward_id: wardId,
  //       street: "street",
  //       latitude: 0,
  //       longitude: 0
  //     },
  //     parcel
  //   }
  // },{
  //   headers: {
  //     "Content-type": "application/json",
  //     "Authorization": goshipToken,
  //   }
  // });
  // }catch(e){
  // console.log("gooooooooooo error", e)  

  // }
  const goshipReply = await axios.post("https://api.goship.io/api/v1/fees-list", {
  "id":0,
  "address_from":{
    "city_code":"700000",
    "district_code":"701100",
    "ward_id":"9168",
    "street":"79/M2 Âu Cơ",
    "latitude":0,
    "longitude":0
  },
  "address_to":{
    "city_code":cityId,
    "district_code":districtId,
    "ward_id":wardId,
    "street":"street",
    "latitude":0,
    "longitude":0
  },
  "picker":{
    "name":"Phạm Văn Đạt",
    "phone":"0941734232"
  },
  "receiver":{
    "name":"Đạt PHạm",
    "phone":"0941734232"
  },
  "parcel":{
    "quantity":1,
    "cod_amount":"0",
    "length":10,
    "width":10,
    "height":10,
    "weight":500,
    "amount":"0",
    "name":"Thực phẩm"
  },
  "metadata":"Chỉ cho khách xem hàng, không cho thử",
  "return_type":0,
  "payer":1,
  "price_table_id":599,
  "total_amount_carrier":200000,
  "total_amount_shop":175900,
  "total_fee":24100,
  "promo_code":"",
  "discount":0,
  "source":0,
  "note_code":"CHOXEMHANGKHONGTHU",
  "pickup_timer":0,
  "service_fee":2100,
  "location_fee":22000,
  "client_id":3558,
  "auto_send":1
}, {
  headers: {
    "accept": "application/json",
    "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
    "authorization": goshipToken,
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referer": "https://shop.goship.io/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
})


  console.log("gooooooooooo", goshipReply.data)  
  return goshipReply.data;
}