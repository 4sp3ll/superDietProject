import React, { useState } from 'react'
import { Input } from 'reactstrap'
import { store } from '../../index'

const CategoriesPriceInput: React.FC<any> = (props: any) => {

    const [state, setState] = useState({InputValue:''})

    const handleChangeInputValue = (e: any) => {
        //regex: numbers[,][0-2 numbers after comma]
        if(e.target.value.match(/^-?\d*[,]?\d{0,2}$/) != null){
            setState({InputValue: e.target.value});
        }
     }
     

    return (
    <>
            <Input
                autoComplete="off"
                name="text"
                id={props.id}
                placeholder={props.placeholder}
                style={{ width: "100%", height: '25px'}}
                onChange={(e) => {
                    handleChangeInputValue(e)
                    //prevent send to redux store 3nd digit after comma
                    if(e.target.value.match(/^-?\d*[,]?\d{0,2}$/)){
                    const action = {   
                        // uzupełnij kiedy będzie gotowe 
                        type: '',
                        payload: {
                            minPriceValue: e.target.value
                        }   
                    }
                        // store.dispatch(action)
                    } 
                }
                } 
                value={state.InputValue}
            />
    </>
    )
}

export default CategoriesPriceInput