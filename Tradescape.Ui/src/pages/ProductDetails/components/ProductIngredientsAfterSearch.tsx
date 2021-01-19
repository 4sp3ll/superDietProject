import React from 'react'
import {
    Container,
    Col,
    Row,
    Button
} from 'reactstrap'
import MyResponsivePie from './ChartForCostsAfterSearch'
import '../line.css'
import { useSelector } from 'react-redux'
import {ChartDataControler} from './ChartDataControler'
import { Table } from 'reactstrap'
import styled from 'styled-components'
import ToggleComponent from '../../ui/Toggle'

const BoldSpan = styled.span`{
    font-weight: bold;
}`


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
        ingredientsPhoto,
        special,
        kcal,
        carbohydrates,
        sugar,
        fat,
        // saturatedFat,
        proteins,
        salt
    } = useSelector((state: StateProps) => {
        return {
            product: state.apiSearchEngineReducer.currentState.data?.products[productNumber],
            ingredients: state.apiSearchEngineReducer.currentState.data?.products[productNumber].ingredients_text_with_allergens_en,
            ingredientsPhoto: state.apiSearchEngineReducer.currentState.data?.products[productNumber].image_ingredients_url,
            special: state.apiSearchEngineReducer.currentState.data?.products[productNumber].ingredients_analysis_tags,
            kcal: state.apiSearchEngineReducer.currentState.data?.products[productNumber].nutriments['energy-kcal_100g'],
            carbohydrates: state.apiSearchEngineReducer.currentState.data?.products[productNumber].nutriments.carbohydrates_100g,
            sugar: state.apiSearchEngineReducer.currentState.data?.products[productNumber].nutriments.sugars_100g,
            fat: state.apiSearchEngineReducer.currentState.data?.products[productNumber].nutriments.fat_100g,
            // saturatedFat: state.apiSearchEngineReducer.currentState.data?.products[productNumber].nutriments['saturated-fat_100g'],
            proteins: state.apiSearchEngineReducer.currentState.data?.products[productNumber].nutriments.proteins_100g,
            salt: state.apiSearchEngineReducer.currentState.data?.products[productNumber].nutriments.salt_100g
        }
    })

    const dataForChart = {
        carbohydrates,
        fat,
        proteins,
        salt
    }

    const handlePalmOil = () => {
        if (special) {
            if (special.includes("en:palm-oil-content-unknown")) {
                return 'no data'
            }
            else if (special.includes("en:may-contain-palm-oil")) {
                return 'no data'
            }
            else if (special.includes("en:palm-oil-free")) {
                return 'palm oil free'
            }
            else if (special.includes("en:palm-oil")) {
                return 'yes'
            }
            else {
                return 'no data'
            }

        }
    }

    const handleVegetarian = () => {
        if (special) {
            if (special.includes("en:vegetarian-status-unknown")) {
                return 'no data'
            }
            else if (special.includes("en:maybe-vegetarian")) {
                return 'no data'
            }
            else if (special.includes("en:vegetarian")) {
                return 'yes'
            }
            else if (special.includes("en:non-vegetarian")) {
                return 'no'
            }
            else {
                return 'no data'
            }

        }
    }

    const handleVegan = () => {
        if (special) {
            if (special.includes("en:vegan-status-unknown")) {
                return 'no data'
            }
            else if (special.includes("en:maybe-vegan")) {
                return 'no data'
            }
            else if (special.includes("en:vegan")) {
                return 'yes'
            }
            else if (special.includes("en:non-vegan")) {
                return 'no'
            }
            else {
                return 'no data'
            }

        }
    }


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
                                <p><BoldSpan>Ingredients:</BoldSpan> {ingredients}</p>
                                <ToggleComponent
                                content={<img src={ingredientsPhoto} alt={'name'}/>}
                                name='see ingredients photo'
                                additionalNote='Disclaimer: photo can contain non-English version of the product'
                                />
                                <p><BoldSpan>Palm oil:</BoldSpan> {handlePalmOil()}</p>
                                <p><BoldSpan>Vegetarian:</BoldSpan> {handleVegetarian()}</p>
                                <p><BoldSpan>Vegan:</BoldSpan> {handleVegan()}</p>
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
                                        <td>{kcal ? `${kcal} kcal` : ''}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Carbohydrates</th>
                                        <td>{carbohydrates ? `${carbohydrates} g` : ''}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row" style={{fontWeight: 'normal'}}> - sugar</th>
                                        <td>{sugar ? `${sugar} g` : ''}</td>
                                        </tr>
                                        <tr></tr>
                                        <tr>
                                        <th scope="row">Fats</th>
                                        <td>{fat ? `${fat} g` : ''}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Proteins</th>
                                        <td>{proteins ? `${proteins} g` : ''}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Salt</th>
                                        <td>{salt ? `${salt} g` : ''}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                        </Row>
                    </Col>
                    <Col xs='6'>
                        <MyResponsivePie
                        data={ChartDataControler(dataForChart)}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductIngredientsAfterSearch;