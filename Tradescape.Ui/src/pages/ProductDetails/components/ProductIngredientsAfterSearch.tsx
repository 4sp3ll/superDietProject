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
                products: []
            }
        }
    },
    ingredients_text_with_allergens_en?: string // @ts-ignore

}

type InitialReduxState =  {

}

const ProductIngredientsAfterSearch = ({productNumber}: any) => {

      const ingredients = useSelector((state: StateProps) => state.apiSearchEngineReducer.currentState.data?.products[productNumber])
            // .ingredients_text_with_allergens_en


    // if (ingredients !== undefined) {
    //     console.log(ingredients.additives_n)
    // }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs='6'>
                        <Row>
                            <Col className="col-auto" style={{margin: '15px 0 15px 0'}}>
                                <h6>Ingredients:</h6>
                                {/* {ingredients} */}
                                <p>photo here</p>
                                <h6>Palm oil:</h6><p>data here</p>
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