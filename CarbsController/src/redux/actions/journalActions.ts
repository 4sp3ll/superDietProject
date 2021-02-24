import { KEEP_PRODUCT } from '../constants/productToKeep'


export const keepProduct = (productInfo: any, quantity: any) => {
    return {
        type: KEEP_PRODUCT,
        payload: {productInfo, quantity}
    }
}