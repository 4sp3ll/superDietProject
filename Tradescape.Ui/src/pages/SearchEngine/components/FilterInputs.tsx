import React, { useRef } from 'react'
import { store } from '../../../index'
import { Input, CustomInput, Label } from 'reactstrap'
import { useDispatch } from 'react-redux'
import allActions from '../../../actions/index'

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

export const MinSalt = () => {
    const dispatch = useDispatch()
    return (
        <>
            <Input
                type="text"
                name="text"
                id="minRevenue"
                placeholder="min salt"
                style={{ width: "15%" }}
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
                id="maxRevenue"
                placeholder="max salt"
                style={{ width: "15%" }}
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
                id="minCommission"
                placeholder="min fiber"
                style={{ width: "15%" }}
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
                id="maxCommission"
                placeholder="max fiber"
                style={{ width: "15%" }}
                onChange={(e) => {
                    dispatch(allActions.maxFiber(e.target.value))
                }} />
        </>
    )
}


export const ContainsWords = () => {
    const dispatch = useDispatch()
    return (
        <Input
            label="text"
            type="text"
            name="text"
            size={39}
            id="includeKeyword"
            placeholder=""
            onChange={(e) => {
                dispatch(allActions.containWords(e.target.value))
            }} />
    )
}

export const LabelsFilter = ({name, radioButtonContainer}: any) => {

    const dispatch = useDispatch()


    return (
        <div className='d-inline-block mt-md-4 mb-2'>
            <p style={{margin: '0 0 7px 0'}}>{name}&nbsp;&nbsp;</p>

            <div style={{margin: '0 0 7px 0'}} className='d-block d-md-inline-block'>
                <label className={`radio-button-container ${radioButtonContainer}`} >Doesn't matter
                    <input
                    defaultChecked
                    onChange={() => {
                        const action = {
                            type: 'SUPERSELLER_DOESNT_MATTER'
                        }
                        // dispatch(allActions.actionTypeDoesntMatter)
                        dispatch(action)
                    }}
                    type="radio"
                    id={`radio-button-container ${radioButtonContainer}`}
                    name={`radio-button-container ${radioButtonContainer}`}
                    data-label="Bez znaczenia"
                    // inline
                    />
                    <span className="radio-button-checkmark"></span>
                </label>
            </div>
            <div style={{margin: '0 0 7px 0'}} className='d-block d-md-inline-block'>
                <label className={`radio-button-container ${radioButtonContainer}`} >Yes
                    <input
                    onChange={() => {
                        const action = {
                            type: 'SUPERSELLER_IT_IS'
                        }
                        dispatch(action)
                    }}
                    type="radio"
                    id={`radio-button-container ${radioButtonContainer}2`}
                    // name="radio-button-container"
                    name={`radio-button-container ${radioButtonContainer}`}
                    data-label="Jest"
                    // inline
                    />
                    <span className="radio-button-checkmark"></span>
                </label>
            </div>
        </div>

    )
}