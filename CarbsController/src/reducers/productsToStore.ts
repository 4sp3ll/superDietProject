import { PRODUCT_TO_STORE } from '../actions/constants/productsToStore'


const initialState = {
    payload: [{ }]

}


export const productToStore = (state = initialState, action: any) => {
    switch (action.type) {
        case PRODUCT_TO_STORE:
            return {
                ...state,
                payload: action.payload
            }
            default:
                return state
    }
}