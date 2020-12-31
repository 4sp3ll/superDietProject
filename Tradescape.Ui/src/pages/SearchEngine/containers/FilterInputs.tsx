import React, { useRef, useState } from 'react'
import { store } from '../../../index'
import { Input, CustomInput, Label } from 'reactstrap'
import { useDispatch } from 'react-redux'
import allActions from '../../../actions/index'
import styled from 'styled-components'
import Tooltips from '../../ui/Tooltips'

// interface Props {
//     props: any
// }

// interface State {

// }

// export class MinPriceInput extends React.Component<Props, State> {
//         constructor(props: any) {
//         super(props)
//         this.state={InputValue:''}
//         this.handleChangeInputValue.bind(this);
//     }
//         handleChangeInputValue(e: any){
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

// zastanów się jak to uprościć, map?

const StyledInput = styled.input`{
    margin: .8vh 0 .8vh 0;
  }`

export const MinSalt = () => {
    const dispatch = useDispatch()
    return (
        <>
            <Input
                type="text"
                name="text"
                style={{margin: '.8vh 0 .8vh 0'}}
                id="minRevenue"
                placeholder="min salt"
                onChange={(e) => {
                    dispatch(allActions.minSalt(e.target.value))

                }} />
        </>
    )
}

export const MaxSalt = () => {
    const dispatch = useDispatch()
    return (
        <>
            <Input
                type="text"
                name="text"
                style={{margin: '.8vh 0 .8vh 0'}}
                id="maxRevenue"
                placeholder="max salt"
                onChange={(e) => {
                    dispatch(allActions.maxSalt(e.target.value))
                }} />
        </>
    )
}
export const MinFiber = () => {
    const dispatch = useDispatch()
    return (
        <>
            <Input
                type="text"
                name="text"
                style={{margin: '.8vh 0 .8vh 0'}}
                id="minCommission"
                placeholder="min fiber"
                onChange={(e) => {
                    dispatch(allActions.minFiber(e.target.value))
                }} />
        </>
    )
}
export const MaxFiber = () => {
    const dispatch = useDispatch()
    return (
        <>
            <Input
                type="text"
                name="text"
                style={{margin: '.8vh 0 .8vh 0'}}
                id="maxCommission"
                placeholder="max fiber"
                onChange={(e) => {
                    dispatch(allActions.maxFiber(e.target.value))
                }} />
        </>
    )
}


export const ContainWords = () => {
    const dispatch = useDispatch()
    return (
        <Input
            label="text"
            type="text"
            name="text"
            size={39}
            id="containWords"
            placeholder=""
            onChange={(e) => {
                dispatch(allActions.containWords(e.target.value))
            }} />
    )
}

export const ShopTag = () => {
    const dispatch = useDispatch()
    return (
        <Input
            label="text"
            type="text"
            name="text"
            size={39}
            id="shopTag"
            placeholder=""
            onChange={(e) => {
                // do poprawy
                dispatch(allActions.containWords(e.target.value))
            }} />
    )
}

export const LabelsFilter = ({name, type}: any) => {
    const dispatch = useDispatch()

    return (
        <div className='d-inline-block' style={{border: '0.1px solid', borderColor: 'rgb(230, 230, 230)', borderRadius: '5px', margin: '2px'}}>
            <p style={{margin: '7px'}}>{name}</p>


            <div style={{margin: '7px'}} className='d-block d-md-inline-block'>
                <label className={`radio-button-container ${type}`} >Doesn't matter
                    <input
                    defaultChecked
                    onChange={() => {
                        dispatch(allActions.additionalFilterLabelDoesntMatter(type.toUpperCase()))
                    }}
                    type="radio"
                    id={`radio-button-container ${type}`}
                    name={`radio-button-container ${type}`}
                    data-label="Doesn't matter"
                    // inline
                    />
                    <span className="radio-button-checkmark"></span>
                </label>
            </div>
            <div style={{margin: '7px'}} className='d-block d-md-inline-block'>
                <label className={`radio-button-container ${type}`} >Yes
                    <input
                    onChange={() => {
                        dispatch(allActions.additionalFilterLabelYes(type.toUpperCase()))
                    }}
                    type="radio"
                    id={`radio-button-container ${type}2`}
                    // name="radio-button-container"
                    name={`radio-button-container ${type}`}
                    data-label="Yes"
                    // inline
                    />
                    <span className="radio-button-checkmark"></span>
                </label>

            </div>
        </div>

    )
}