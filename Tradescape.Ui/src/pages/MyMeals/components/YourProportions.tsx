import React, { ReactElement } from 'react'
import { Col, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'
import { YourProportionFromDatabase } from '../../../firebase/yourProporitonsDatabase'
import styled from 'styled-components'
import allActions from '../../../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { yourProportionsToDatabase } from '../../../firebase/yourProporitonsDatabase'

const ElementsMargin = styled.div`{
    margin: 7px 0px 7px 0px;

}`

interface Props {

}


export default function YourProportions({}: Props): ReactElement {

    const dispatch = useDispatch()
    const uid = useSelector((state: any) => state.firebase.auth.uid)
    const yourProportionData = useSelector((state: any) => state.yourProportions)

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '2rem' }}>
            <Col md='5'>
                <YourProportionFromDatabase/>
                <ElementsMargin>
                    <InputGroup size='sm'>
                        <Input
                        placeholder="Your carbs"
                        onChange={(e) => dispatch(allActions.yourCarbo(e.target.value))}
                        />
                        <Input
                        placeholder="Your protein"
                        onChange={(e) => dispatch(allActions.yourProtein(e.target.value))}
                        />
                        <Input
                        placeholder="Your fat"
                        onChange={(e) => dispatch(allActions.yourFat(e.target.value))}
                        />
                        <Input
                        placeholder="Your salt"
                        onChange={(e) => dispatch(allActions.yourSalt(e.target.value))}
                        />
                        <Input
                        placeholder="Kcal"
                        onChange={(e) => dispatch(allActions.yourKcal(e.target.value))}
                        />
                        <InputGroupAddon addonType="append">
                            <Button
                            color="secondary"
                            onClick={() => {yourProportionsToDatabase(uid, yourProportionData)}}>
                                Remember
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </ElementsMargin>
            </Col>
        </div>
    )
}
