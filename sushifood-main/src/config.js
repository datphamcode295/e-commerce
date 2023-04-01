export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const backendAddress = IS_PRODUCTION ? "https://e-sushi-be.herokuapp.com" : 'http://localhost:3030';