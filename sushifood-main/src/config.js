export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const backendAddress = IS_PRODUCTION ? "https://e-commerce-neon-nu-85.vercel.app/" : 'http://localhost:3030';