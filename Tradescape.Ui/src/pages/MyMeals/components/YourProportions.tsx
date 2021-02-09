import React, { ReactElement } from 'react'
import { Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import styled from 'styled-components'
import allActions from '../../../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { yourProportionsToDatabase } from '../../../firebase/yourProporitonsDatabase'
import YourProportionTable from './YourProportionTable'

const ElementsMargin = styled.div`{
    margin: 7px 0px 7px 0px;

}`

export default function YourProportions(): ReactElement {

    const dispatch = useDispatch()
    const uid = useSelector((state: any) => state.firebase.auth.uid)
    const yourProportionData = useSelector((state: any) => state.yourProportions)
    const { yourCarbo, yourProtein, yourFat } = yourProportionData
    const kcal = (yourCarbo ? (parseInt(yourCarbo)*4) : 0) + (yourProtein ? (parseInt(yourProtein)*4) : 0) + (yourFat ? (parseInt(yourFat)*9): 0)

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '2rem' }}>
            <Col md='5'>
                <YourProportionTable/>
                <ElementsMargin>
                    <InputGroup size='sm'>
                        <FormControl
                        placeholder="Your carbs"
                        onChange={(e) => {dispatch(allActions.yourCarbo(e.target.value))}}
                        />
                        <FormControl
                        placeholder="Your protein"
                        onChange={(e) => {dispatch(allActions.yourProtein(e.target.value))}}
                        />
                        <FormControl
                        placeholder="Your fat"
                        onChange={(e) => {dispatch(allActions.yourFat(e.target.value))}}
                        />
                        <FormControl
                        placeholder="Your salt"
                        onChange={(e) => {dispatch(allActions.yourSalt(e.target.value))}}
                        />
                        <FormControl
                        placeholder="Kcal"
                        readOnly={true}
                        value={`${kcal} Kcal`}
                        />
                        {console.log(typeof (parseInt(yourCarbo)*4))}
                        <InputGroup.Append>
                            <Button
                            variant='orange'
                            onClick={() => {yourProportionsToDatabase(uid, kcal.toString(), yourProportionData)}}>
                                Remember
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </ElementsMargin>
            </Col>
        </div>
    )
}
