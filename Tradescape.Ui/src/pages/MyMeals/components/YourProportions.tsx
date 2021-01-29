import React, { ReactElement, useState } from 'react'
import { Col, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'
import { YourProportionFromDatabase } from '../../../firebase/yourProporitonsDatabase'
import styled from 'styled-components'
import allActions from '../../../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { yourProportionsToDatabase } from '../../../firebase/yourProporitonsDatabase'

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
                <YourProportionFromDatabase/>
                <ElementsMargin>
                    <InputGroup size='sm'>
                        <Input
                        placeholder="Your carbs"
                        onChange={(e) => {dispatch(allActions.yourCarbo(e.target.value))}}
                        />
                        <Input
                        placeholder="Your protein"
                        onChange={(e) => {dispatch(allActions.yourProtein(e.target.value))}}
                        />
                        <Input
                        placeholder="Your fat"
                        onChange={(e) => {dispatch(allActions.yourFat(e.target.value))}}
                        />
                        <Input
                        placeholder="Your salt"
                        onChange={(e) => {dispatch(allActions.yourSalt(e.target.value))}}
                        />
                        <Input
                        placeholder="Kcal"
                        readOnly={true}
                        value={`${kcal} Kcal`}
                        />
                        {console.log(typeof (parseInt(yourCarbo)*4))}
                        <InputGroupAddon addonType="append">
                            <Button
                            color="secondary"
                            onClick={() => {yourProportionsToDatabase(uid, kcal.toString(), yourProportionData)}}>
                                Remember
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </ElementsMargin>
            </Col>
        </div>
    )
}
