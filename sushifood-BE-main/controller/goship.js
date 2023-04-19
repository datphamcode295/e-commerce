import axios from 'axios';
import { goshipUrl, goshipToken } from "../config.js";
import { requestFees } from '../3rd_api/goship.js';

export const getCities = async (req, res, next) => {
  try {
    const goshipReply = await axios.get(`${goshipUrl}/cities`, {
      headers: {
        "Content-type": "application/json",
        "Authorization": goshipToken,
      }
    });

// const headers = {
//   headers: {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
//     "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU1ZTE5NmRjMzA1ZjM1MDMyOGZjMzQ2YjEwYTJmYzRkMDQ3YzJiMzdkYTExMTA0M2I2YmM1MDM5ZjFjZDhlNDA3NGE0ZmUwMThlMGI0OTkwIn0.eyJhdWQiOiIxIiwianRpIjoiNTVlMTk2ZGMzMDVmMzUwMzI4ZmMzNDZiMTBhMmZjNGQwNDdjMmIzN2RhMTExMDQzYjZiYzUwMzlmMWNkOGU0MDc0YTRmZTAxOGUwYjQ5OTAiLCJpYXQiOjE2ODAzNDM5NzMsIm5iZiI6MTY4MDM0Mzk3MywiZXhwIjoxNzExOTY2MzczLCJzdWIiOiIzNTU4Iiwic2NvcGVzIjpbXX0.qgBUN99wCuR_3SQYuJFcTfjXjlxw_jYWzaST0qtQEycuX_ClA3deVJlILnMUjsLOgONiUmbjALHgQLGlXQj2uIkN7uJsAC-RhXK_PeL4t_mwJV-Li5oAfGMwqIfZN5M7pPLXT-2s6HZr27POuznHWdZRTNSqc-L-itqwrXjJRyXoYKvAabHFlVcb2uaqUxj1iIj3QRIWdFnZjLDyvmCJg8dYMGFV3GhRMX-UP9eBNqkLcw3-tivVqMXEDBfFfFbrBobfH4gOgdV5Bg8hTlPy-fE74i3vW0q-iBO1JS8Awk-ea2KOMRy-0BwwUkK0O9ZJss3TIsiUVonozD_8QliLT-CjbTddBwhhxEGW3ztfAvYgE0IUXiuTnqgbezA9ej4S3SwttJeJvsDMHnlf0dtZTNzXJqGeJL0fS4OmauUorbgBfYsl6RkG2zxWQzWAAseSe8wGIn3cCBhbU7EZEkLKNi8HSUCrK9F4L0dCHvZrjKjNGbIC27367PFoE-63NsElSSvzYGC02USyjMmTryykswQXRBMspS-L4lt79cDRGtAviobL3mtR7dZYeJqhQlRTgNfDzWlPx0o_4x5ED977a8ek5UBvtxq6OyxM2VQ8oFhDuwPveuwNlyq0K_UkhIbywtRvMQ3UWXtu5lxAmaUKq98xwYT3WIo6vcXkBKZP_5U",
//     "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Linux\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-site",
//     "Referer": "https://shop.goship.io/",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   }
// };

// const goshipReply = await axios.get("https://api.goship.io/api/v1/cities?limit=-1&sort=name:1", headers)

    res.status(200).json(goshipReply.data.data);
  } catch (err) {
    return next(err);
  }
}

export const getDistrict = async (req, res, next) => {
  try {
    const { params: { cityId } } = req;
    const goshipReply = await axios.get(`${goshipUrl}/cities/${cityId}/districts`, {
      headers: {
        "Content-type": "application/json",
        "Authorization": goshipToken,
      }
    });
    res.status(200).json(goshipReply.data.data);
  } catch (err) {
    return next(err);
  }
}

export const getWards = async (req, res, next) => {
  try {
    const { params: { districtId } } = req;
    const goshipReply = await axios.get(`${goshipUrl}/districts/${districtId}/wards`, {
      headers: {
        "Content-type": "application/json",
        "Authorization": goshipToken,
      }
    });
    res.status(200).json(goshipReply.data.data);
  } catch (err) {
    return next(err);
  }
}

export const getFee = async (req, res, next) => {
  try {
    const { params: { cityId, districtId, wardId} } = req;
    const fees = await requestFees(cityId, districtId, wardId);
    res.status(200).json(fees.data);
  } catch (err) {
    return next(err);
  }
}