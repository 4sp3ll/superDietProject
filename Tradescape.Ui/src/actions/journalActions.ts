export const addProduct = (product: any) => {
    return (dispatch: (arg0: { type: string; product: any }) => void, getState: any) => {

        dispatch({ type: 'ADD_PRODUCT', product})
    }
}