import React, { useRef , getState} from 'react'
import { store } from '../index'
import { Input, CustomInput, Label } from 'reactstrap'
import {connect} from 'react-redux'

// export class MinPriceInput extends React.Component {
//         constructor(props) {
//         super(props)
//         this.state={InputValue:''}
//         this.handleChangeInputValue.bind(this);
//     }
//         handleChangeInputValue(e){
//             //regex: numbers[,][0-2 numbers after comma]
//             if(e.target.value.match(/^-?\d*[,]?\d{0,2}$/) != null){
//                 this.setState({InputValue: e.target.value});
//             }
//          }
//     render(){
//     return (
//         <>
//             <Input
//                 autoComplete="off"
//                 type=""
//                 name="text"
//                 id="minPrice"
//                 placeholder="min cena (zł)"
//                 style={{ width: "35%" }}
//                 onChange={(e) => {
//                     this.handleChangeInputValue(e)
//                     //prevent send to redux store 3nd digit after comma
//                     if(e.target.value.match(/^-?\d*[,]?\d{0,2}$/)){
//                     const action = {
//                         type: 'CHANGE_MIN_PRICE',
//                         payload: {
//                             minPriceValue: e.target.value
//                         }
//                     }
//                     store.dispatch(action)
//                     }
//                 }
//             }
//             value={this.state.InputValue}
//                 />
//         </>
//         )
//     }
// }
export class MinPriceInput extends React.Component {
        constructor(props) {
        super(props)
        this.state={InputValue:''}
        this.handleChangeInputValue.bind(this);
    }
        handleChangeInputValue(e){
            //regex: numbers[,][0-2 numbers after comma]
            if(e.target.value.match(/^-?\d*[,]?\d{0,2}$/) != null){
                this.setState({InputValue: e.target.value});
            }
         }
    render(){
    return (
        <>
            <Input
                autoComplete="off"
                type=""
                name="text"
                id="minPrice"
                placeholder="min cena (zł)"
                style={{ width: "35%" }}
                onChange={(e) => {
                    this.handleChangeInputValue(e)
                    //prevent send to redux store 3nd digit after comma
                    if(e.target.value.match(/^-?\d*[,]?\d{0,2}$/)){
                    const action = {
                        type: 'CHANGE_MIN_PRICE',
                        payload: {
                            minPriceValue: e.target.value
                        }
                    }
                    store.dispatch(action)
                    }
                }
            }
            value={this.state.InputValue}
                />
        </>
        )
    }
}


export const MaxPriceInput = () => {
    return (
        <>
            <Input
                type="text"
                name="text"
                id="maxPrice"
                placeholder="max cena (zł)"
                style={{ width: "35%" }}
                onChange={(e) => {
                    const action = {
                        type: 'CHANGE_MAX_PRICE',
                        payload: {
                            maxPriceValue: e.target.value
                        }
                    }
                    store.dispatch(action)
                }} />
        </>
    )
}
export const MinNetInput = () => {
    return (
        <>
            <Input
                type="text"
                name="text"
                id="minNet"
                placeholder="min net (zł)"
                style={{ width: "35%" }}
                onChange={(e) => {
                    const action = {
                        type: 'CHANGE_MIN_NET',
                        payload: {
                            minNetValue: e.target.value
                        }
                    }
                    store.dispatch(action)
                }} />
        </>
    )
}
export const MaxNetInput = () => {
    return (
        <>
            <Input
                type="text"
                name="text"
                id="maxNet"
                placeholder="max net (zł)"
                style={{ width: "35%" }}
                onChange={(e) => {
                    const action = {
                        type: 'CHANGE_MAX_NET',
                        payload: {
                            maxNetValue: e.target.value
                        }
                    }
                    store.dispatch(action)
                }} />
        </>
    )
}
export const MinSalesUnitsInput = () => {
    return (
        <>
            <Input
                type="text"
                name="text"
                id="minSalesUnits"
                placeholder="min sprzedaż (szt.)"
                style={{ width: "35%" }}
                onChange={(e) => {
                    const action = {
                        type: 'CHANGE_MIN_SALES_UNITS',
                        payload: {
                            minSalesUnitsValue: e.target.value
                        }
                    }
                    store.dispatch(action)
                }} />
        </>
    )
}

export const MaxSalesUnitsInput = () => {
    return (
        <>
            <Input
                type="text"
                name="text"
                id="maxSalesUnits"
                placeholder="max sprzedaż (szt.)"
                style={{ width: "35%" }}
                onChange={(e) => {
                    const action = {
                        type: 'CHANGE_MAX_SALES_UNITS',
                        payload: {
                            maxSalesUnitsValue: e.target.value
                        }
                    }
                    store.dispatch(action)
                }} />
        </>
    )
}

export const MinRevenueInput = () => {
    return (
        <>
            <Input
                type="text"
                name="text"
                id="minRevenue"
                placeholder="min obrót (zł)"
                style={{ width: "35%" }}
                onChange={(e) => {
                    const action = {
                        type: 'CHANGE_MIN_REVENUE',
                        payload: {
                            minRevenueValue: e.target.value
                        }
                    }
                    store.dispatch(action)
                }} />
        </>
    )
}

export const MaxRevenueInput = () => {
    return (
        <>
            <Input
                type="text"
                name="text"
                id="maxRevenue"
                placeholder="max obrót (zł)"
                style={{ width: "35%" }}
                onChange={(e) => {
                    const action = {
                        type: 'CHANGE_MAX_REVENUE',
                        payload: {
                            maxRevenueValue: e.target.value
                        }
                    }
                    store.dispatch(action)
                }} />
        </>
    )
}
export const MinCommissionInput = () => {
    return (
        <>
            <Input
                type="text"
                name="text"
                id="minCommission"
                placeholder="min prowizja (%)"
                style={{ width: "35%" }}
                onChange={(e) => {
                    const action = {
                        type: 'CHANGE_MIN_COMMISSION',
                        payload: {
                            minCommissionValue: e.target.value
                        }
                    }
                    store.dispatch(action)
                }} />
        </>
    )
}
export const MaxCommissionInput = () => {
    return (
        <>
            <Input
                type="text"
                name="text"
                id="maxCommission"
                placeholder="max prowizja (%)"
                style={{ width: "35%" }}
                onChange={(e) => {
                    const action = {
                        type: 'CHANGE_MAX_COMMISSION',
                        payload: {
                            maxCommissionValue: e.target.value
                        }
                    }
                    store.dispatch(action)
                }} />
        </>
    )
}


export const ContainsWords = () => {
    return (
        <Input
            label="text"
            type="text"
            name="text"
            size={39}
            id="includeKeyword"
            placeholder=""
            onChange={(e) => {
                console.log(e.target.value)
                const action = {
                    type: 'CONTAINS_ADDITIONAL_WORDS',
                    payload: {
                        additionalWordsContainer: e.target.value
                    }
                }
                store.dispatch(action)
            }} />
    )
}
export const DoesntContainsWords = () => {
    return (
        <Input
            label="text"
            type="text"
            name="text"
            size={39}
            id="doesntIncludeKeyword"
            placeholder=""
            onChange={(e) => {
                console.log(e.target.value)
                const action = {
                    type: 'DOESNT_CONTAINS_ADDITIONAL_WORDS',
                    payload: {
                        oppositeWordsContainer: e.target.value
                    }
                }
                store.dispatch(action)
            }} />
    )
}

export const SupersellerFilter = () => {
    return (
        <div className='d-inline-block mt-md-4 mb-2'>
            <p style={{margin: '0 0 7px 0'}}>Super Sprzedawca:&nbsp;&nbsp;</p>

            <div style={{margin: '0 0 7px 0'}} className='d-block d-md-inline-block'>
                <label className="radio-button-container" >Bez znaczenia
                    <input
                    defaultChecked
                    onChange={() => {
                        const action = {
                            type: 'SUPERSELLER_DOESNT_MATTER'
                        }
                        store.dispatch(action)
                    }}
                    type="radio"
                    id="saCustomRadio"
                    name="radio-button-container"
                    label="Bez znaczenia"
                    inline
                    />
                    <span className="radio-button-checkmark"></span>
                </label>
            </div>
            <div style={{margin: '0 0 7px 0'}} className='d-block d-md-inline-block'>
                <label className="radio-button-container" >Jest
                    <input
                    onChange={() => {
                        const action = {
                            type: 'SUPERSELLER_IT_IS'
                        }
                        store.dispatch(action)
                    }}
                    type="radio"
                    id="saCustomRadio2"
                    name="radio-button-container"
                    label="Jest"
                    inline
                    />
                    <span className="radio-button-checkmark"></span>
                </label>
            </div>
            <div style={{margin: '0 0 7px 0'}} className='d-block d-md-inline-block'>
                <label className="radio-button-container" >Nie jest
                    <input
                    onChange={() => {
                        const action = {
                            type: 'SUPERSELLER_IT_IS_NOT'
                        }
                        store.dispatch(action)
                    }}
                    type="radio"
                    id="saCustomRadio3"
                    name="radio-button-container"
                    label="Nie jest"
                    inline
                    />
                    <span className="radio-button-checkmark"></span>
                </label>
            </div>
        </div>

    )
}



const mapStateToProps = state => ({
    minPriceValue: state.filtersStore.minPriceValue
})

connect (mapStateToProps)(MinPriceInput)