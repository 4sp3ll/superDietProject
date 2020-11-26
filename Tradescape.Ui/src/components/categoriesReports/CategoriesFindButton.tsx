import React, {useState} from 'react'
import {Button, Spinner, Container, Row} from 'reactstrap'
import {useSelector} from 'react-redux'
// import {OfferDataFetch} from './OfferDataFetch'
import { store } from '../../index'

type StateProps = Readonly<{
    isLoading: boolean
}>

type InitialReduxState = Readonly<{
    apiAnswerOfferId: any,
    loading: boolean
}>

const CategoriesFindButton: React.FC = () => {

    const { isLoading } = useSelector<InitialReduxState, StateProps>((state: InitialReduxState) => {
        return { isLoading: state.apiAnswerOfferId.loading }
    });

    return (

        <div  className="row justify-content-end" style={{margin: '20px 31px 0 0'}}>
            {
                isLoading ?

                <Button  
                color="success"
                style={{ width: "100px", height: "40px", fontSize: "15px", backgroundColor: "#f87320", margin: '0 0 0 15px' }}
                // disabled
                onClick={() => {
                    // OfferDataFetch()
                    }}
                >
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        style={{width: '20px', height: '20px', margin: 'auto'}}
                        />
                </Button>
                :  
                <Button
                    color="success"
                    style={{ width: "100px", height: "40px", fontSize: "15px", backgroundColor: "#f87320", margin: '0 0 0 15px' }}
                    onClick={() => {
                        // OfferDataFetch()
                        const action = {
                            type: 'OFFER_ID_CHOSEN',
                            payload: {
                                offerDetailsIdChosen: true
                            }
                            
                        }
                        store.dispatch(action) 
                        }}
                >
                    Szukaj
                </Button>
            }
        </div>
   
    )
}

export default CategoriesFindButton