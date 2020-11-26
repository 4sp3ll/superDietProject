import axios from 'axios'
import { store } from '../../index'
import { Dispatch } from 'redux'


export const OfferDataFetch = () => {
    const {offerDetailsId} = store.getState().offerDetailsReducer
    // const userRequestId: number | string = ''
  
    store.dispatch((dispatch: Dispatch) => {
        dispatch(fetchOfferDetailBegin());
        axios.get(`https://5ef9e670bc5f8f0016c6727c.mockapi.io/test/offers/${offerDetailsId}`)
            .then(response => dispatch(fetchOfferDetailSuccess(response)))
            .catch(error => dispatch(fetchOfferDetailError(error)))
    })
}


const FETCH_OFFER_DETAILS_REQUEST = 'FETCH_OFFER_DETAILS_REQUEST'
const FETCH_OFFER_DETAILS_SUCCESS = 'FETCH_OFFER_DETAILS_SUCCESS'
const FETCH_OFFER_DETAILS_ERROR = 'FETCH_OFFER_DETAILS_ERROR'

const fetchOfferDetailBegin = () => {
    return {
        type: FETCH_OFFER_DETAILS_REQUEST,
    }
}

const fetchOfferDetailSuccess = (currentState: object) => {
    return {
        type: FETCH_OFFER_DETAILS_SUCCESS,
        payload: currentState
    }
}

const fetchOfferDetailError = (error: string) => {
    return {
        type: FETCH_OFFER_DETAILS_ERROR,
        payload: error
    }
}

const initialState = {
    currentState: {data: {}},
    loading: false,
    error: null
}

interface Actions {
    type: string,
    currentState: object,
    payload?: string,
    loading: boolean,
    error: boolean
}



export const apiAnswerOfferId = (state = initialState, action: Actions) => {
    switch (action.type) {
        case FETCH_OFFER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_OFFER_DETAILS_SUCCESS:
            return {
                loading: false,
                currentState: action.payload,
                error: null
            }
        case FETCH_OFFER_DETAILS_ERROR:
            return {
                loading: false,
                curentState: {},
                error: action.payload
            }
        default:
            return state
    }
}