const OFFER_DETAILS_ID = 'OFFER_DETAILS_ID'
const OFFER_ID_CHOSEN = 'OFFER_ID_CHOSEN'

interface ChosenOfferId {
    type: string, 
    payload: any
}

export const offerDetailsReducer = (state = {}, action: ChosenOfferId) => {
    switch (action.type) {
        case OFFER_DETAILS_ID:
            return {
                ...state,
                offerDetailsId: action.payload.offerDetailsId
            }
        case OFFER_ID_CHOSEN:
            return {
                ...state,
                offerDetailsIdChosen: action.payload.offerDetailsIdChosen
            }
            default:
                return state
        }
        
    }
            