import { KEEP_PRODUCT } from '../actions/constants/productToKeep'


const initialState = {
    product: {
        productInfo: {},
        quantity: {}
    }

}


export const keepedProductReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case KEEP_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
            default:
                return state
    }
}
