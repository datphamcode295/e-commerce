import dotenv from 'dotenv';

dotenv.config();

const dbURL = "mongodb+srv://vandat2000:vandat2000@cluster0.mxo8dtq.mongodb.net/"
//mongodb+srv://QPhuc:123456ABC@pse-test.tl4gi.mongodb.net/

export const dbConfig = {
    uri: dbURL + "test",
    url: dbURL + "ECOM-DB?retryWrites=true&w=majority"
};

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const FEAddress = IS_PRODUCTION ? "https://e-commerce-7iiv.vercel.app/" : "http://localhost:3000";

export const saltRounds = process.env.SALT_ROUND ? parseInt(process.env.SALT_ROUND, 10) : 10;
export const jwtSecret = process.env.JWT_SECRET || 'abcdef';


// MOMO STUFF
export const partnerCode = "MOMO";
// export const partnerCode = "MOMOKLHU20211025";
export const accessKey = "F8BBA842ECF85";
// export const accessKey = "ZaJDPNooBAEIDkLd";
export const secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
// export const secretkey = "apzcpZayg1uDeim32NUAspfVAHjUjvez";
// export const orderId = requestId;
export const redirectUrl = FEAddress;
export const ipnUrl = 
    `${IS_PRODUCTION 
        ? 'https://e-commerce-neon-nu-85.vercel.app' 
        : 'https://aa2c-113-22-198-84.ap.ngrok.io'}/webhook/momo`;
        
        // : 'http://1a98-14-169-198-135.ngrok.io'}/webhook/momo`;
export const requestType = "captureWallet"
export const extraData = ""; //pass empty value if your merchant does not have stores
// END MOMO STUFF


export const goshipUrl = 'http://api.goship.io/api/v2';
// export const goshipUrl = 'http://sandbox.goship.io/api/v2';
// export const goshipToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRhYjQyZTdmZTk3YjIxMjI2NDMwYjc4ZTU1ZDgzNTU1OGQ3MDQ3NDExODVmNjMzN2EwMzllZjE0N2IxZDE4MmIwMjQ3ZTkxYTc3MDBmOTJjIn0.eyJhdWQiOiI5IiwianRpIjoiNGFiNDJlN2ZlOTdiMjEyMjY0MzBiNzhlNTVkODM1NTU4ZDcwNDc0MTE4NWY2MzM3YTAzOWVmMTQ3YjFkMTgyYjAyNDdlOTFhNzcwMGY5MmMiLCJpYXQiOjE2MzU0NDk4OTYsIm5iZiI6MTYzNTQ0OTg5NiwiZXhwIjo0NzkxMTIzNDk2LCJzdWIiOiIzMDcxIiwic2NvcGVzIjpbXX0.KVSiLhgtVc9JfbB57f4zCD87HrrKw6Nel-LwBVSmX5qkO1yjYddhvycvDda1rsSMAG-kDPHamBV-IkkdK3e0deXzIcFTbUQVIzXduub9h2x-3OgfLxt2YRC1m64NDZixsOppFguJP3MSykbNC5wteWrzyeUp5FhvNqA2Ecd4IYIkducRHX-jIvmT-9h5WeoaklBvt-pdv_MOYskgGb8HSLXMZDZp_2VWhbdwGb27tYyErYhsFR8CNfZhPpKDodfS-nQhxwsxDJAxpRjjZzK8316FlIL44gUBagOL03iZDpldZfE_Hv35qLMQfyCWGTchUmwwFQHyiG9z_eVAjYE1xVjKemnaQQ5OnVOAh2fMbjEev1_d75NwcNjKVvGIGo8Hcyt7vBiXooVOtdhfAlUbOw4ez37VEFX4ik9mnX6Ruppxs5X-A4jI9ZRDaoxk-THB5gzaewrDDzk_SxkF8SqlnRYmBnbRFM-Am79rOhxkR_dhdqToi1zhQKJN-Jc9o8xN6bnmFOtXlInxGh3fx8LMqmr_ChjpBqvfMSGfu1w4aZq-n1ENbCxPYUkA61BEdQIatv1yyxBmli5lSuMasftE2hKzY6bk0-o_eb6EUM4QbSjdNJC6cL3dnB-KvbvM-mDmoKTRqmds4sH5jve3RQmAuIB3a9tTEY-c98NFBlJBESE';
export const goshipToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU1ZTE5NmRjMzA1ZjM1MDMyOGZjMzQ2YjEwYTJmYzRkMDQ3YzJiMzdkYTExMTA0M2I2YmM1MDM5ZjFjZDhlNDA3NGE0ZmUwMThlMGI0OTkwIn0.eyJhdWQiOiIxIiwianRpIjoiNTVlMTk2ZGMzMDVmMzUwMzI4ZmMzNDZiMTBhMmZjNGQwNDdjMmIzN2RhMTExMDQzYjZiYzUwMzlmMWNkOGU0MDc0YTRmZTAxOGUwYjQ5OTAiLCJpYXQiOjE2ODAzNDM5NzMsIm5iZiI6MTY4MDM0Mzk3MywiZXhwIjoxNzExOTY2MzczLCJzdWIiOiIzNTU4Iiwic2NvcGVzIjpbXX0.qgBUN99wCuR_3SQYuJFcTfjXjlxw_jYWzaST0qtQEycuX_ClA3deVJlILnMUjsLOgONiUmbjALHgQLGlXQj2uIkN7uJsAC-RhXK_PeL4t_mwJV-Li5oAfGMwqIfZN5M7pPLXT-2s6HZr27POuznHWdZRTNSqc-L-itqwrXjJRyXoYKvAabHFlVcb2uaqUxj1iIj3QRIWdFnZjLDyvmCJg8dYMGFV3GhRMX-UP9eBNqkLcw3-tivVqMXEDBfFfFbrBobfH4gOgdV5Bg8hTlPy-fE74i3vW0q-iBO1JS8Awk-ea2KOMRy-0BwwUkK0O9ZJss3TIsiUVonozD_8QliLT-CjbTddBwhhxEGW3ztfAvYgE0IUXiuTnqgbezA9ej4S3SwttJeJvsDMHnlf0dtZTNzXJqGeJL0fS4OmauUorbgBfYsl6RkG2zxWQzWAAseSe8wGIn3cCBhbU7EZEkLKNi8HSUCrK9F4L0dCHvZrjKjNGbIC27367PFoE-63NsElSSvzYGC02USyjMmTryykswQXRBMspS-L4lt79cDRGtAviobL3mtR7dZYeJqhQlRTgNfDzWlPx0o_4x5ED977a8ek5UBvtxq6OyxM2VQ8oFhDuwPveuwNlyq0K_UkhIbywtRvMQ3UWXtu5lxAmaUKq98xwYT3WIo6vcXkBKZP_5U';
// {"code":200,"status":"success","data":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYxNjZmMjM4MmU3MjNkNWI1ZWQ0OTUyM2IzZWMyZDA5MGEyYjEzZjZkNTYwZjI2NDY3ZjlkMGZhZWFjY2IyNjg1MTM1OTM2NDkxZTVmYzU0In0.eyJhdWQiOiI3NyIsImp0aSI6ImYxNjZmMjM4MmU3MjNkNWI1ZWQ0OTUyM2IzZWMyZDA5MGEyYjEzZjZkNTYwZjI2NDY3ZjlkMGZhZWFjY2IyNjg1MTM1OTM2NDkxZTVmYzU0IiwiaWF0IjoxNjgwMzQ0MDgxLCJuYmYiOjE2ODAzNDQwODEsImV4cCI6MTk5NTk2MzI4MSwic3ViIjoiMzU1OCIsInNjb3BlcyI6W119.rgxKUJ2AWIp4AxlhbqHOESnpbw14CD57GX6kilqzTWENSEQTcEPji9hv0pAWkQvQncS8_rgs-Xm-BitTZqSpOmMaGIGJpRFEhiFzxRstGpU8HgW9wYwPPQl1yUG5x09ZVGLt3yogT6_aeWss5HSDvcF4h41u2n7HWvPPOEglVtvO-VuyGzqlsJ6a9q5PMYNo-UDS4eo2B-vR0zJTXm0LzgzqI8mTqWrysMm1fWTrkxKp0i5O0-nFaUZgKvaMMALstpIiLiFcBc32Civ6xM6rOFiYSlFG3DKobDODFsKyPKXxehVEgeMo1ZlOkd9za_wxE801fSb7AzO_SQAc5ejPz0GeHnUIsb-Nm_BjZVb4rgyY9w9V5Flt3dazQ1Hptnv6kmEzfinebrYjnfptOoBxWn1eANSKR8i_1WQiEuZfZcseZH2DYB48fP4XXwxsCs1Gn_du_0hze0RCIjUzdoUHWO6Lo8dRj365he--m_eM9MybQePAJ2rInvgiK_RSmmk8vjAHPa3kMlKMBMvJC630zJhXRxzCbQ0gjccoVV9oegECeNhUDu_WMxStls22cnnXBsq8eCbZ4RDfeTKJxfdfhidoC9y1keqzUzLDnh33Cb35Mpx4ijo2OZj8Hy9-40oDzbMCAlRKVMYXO6VQInnE3vIY1O5VSnOsHhOZ_WtMF4U"}
