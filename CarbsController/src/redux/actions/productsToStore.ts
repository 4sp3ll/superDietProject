import {
    PRODUCT_TO_STORE
} from '../constants/productsToStore'

export const productsToStore = (payload: any) => ({
    type: PRODUCT_TO_STORE,
    payload
    })