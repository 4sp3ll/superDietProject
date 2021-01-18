import React from 'react'
import {
    Container,
    Col,
    Row
} from 'reactstrap'
import MyResponsivePie from './ChartForCostsAfterSearch'
import '../line.css'
import { useSelector } from 'react-redux'
import {ChartDataControler} from './ChartDataControler'
import { Table } from 'reactstrap'


type StateProps = {
    state: any,
    apiSearchEngineReducer: {
        currentState: {
            data: {
                products: any[]
            }
        }
    },
    ingredients_text_with_allergens_en?: string // @ts-ignore

}


const ProductIngredientsAfterSearch = ({productNumber}: any) => {


    const {
        product,
        ingredients,
        // palm_oil
    } = useSelector((state: StateProps) => {
        return {
            product: state.apiSearchEngineReducer.currentState.data?.products[productNumber],
            ingredients: state.apiSearchEngineReducer.currentState.data?.products[productNumber].ingredients_text_with_allergens_en,
            special: state.apiSearchEngineReducer.currentState.data?.products[productNumber].ingredients_analysis_tags
            // "en:palm-oil-content-unknown",
            // "en:palm-oil-free",
            // "en:palm-oil",
            // "en:may-contain-palm-oil",

            // "en:vegan-status-unknown",
            // "en:vegan",
            // "en:non-vegan",
            // "en:maybe-vegan",

            // "en:vegetarian-status-unknown"
            // "en:vegetarian"
            // "en:non-vegetarian"
            // "en:maybe-vegetarian"
        }
    })

    // if (ingredients !== undefined) {
        console.log(product)
    // }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs='6'>
                        <Row>
                            <Col className="col-auto" style={{margin: '15px 0 15px 0'}}>
                                <p><span style={{fontWeight: 'bold'}}>Ingredients:</span> {ingredients}</p>
                                <p>photo here</p>
                                {/* <p><span style={{fontWeight: 'bold'}}>Palm oil:</span> {palm_oil}</p> */}
                                <h6>Vegetarian:</h6><p>data here</p>
                                <h6>Vegan:</h6><p>data here</p>
                            </Col>
                        </Row>
                        <Row style={{margin: '0 15px 0 15px'}}>
                                <Table
                                responsive={true}
                                bordered={true}
                                size='sm'
                                >
                                    <thead>
                                        <tr>
                                        <th scope="col">Info per 100g</th>
                                        <th scope="col">value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">Kcal</th>
                                        <td>Mark</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Carbohydrates</th>
                                        <td>Jacob</td>
                                        </tr>
                                        <tr>
                                        <th scope="row" style={{fontWeight: 'normal'}}>sugar</th>
                                        <td>Jacob</td>
                                        </tr>
                                        <tr></tr>
                                        <tr>
                                        <th scope="row">Fats</th>
                                        <td>Jacob</td>
                                        </tr>
                                        <tr>
                                        <th scope="row" style={{fontWeight: 'normal'}}>saturaded</th>
                                        <td>Jacob</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Proteins</th>
                                        <td>Larry</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Salt</th>
                                        <td>Larry</td>
                                        </tr>
                                    </tbody>
                                </Table>
                        </Row>
                    </Col>
                    <Col xs='6'>
                        <MyResponsivePie
                        data={ChartDataControler()}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductIngredientsAfterSearch;