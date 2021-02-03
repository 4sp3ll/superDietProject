import React, { ReactElement, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { useAllUserProductsByDate } from '../../../firebase/DisplayAddedProducts'
import allActions from '../../../actions'
import { store } from '../../..'
import { OuterExpressionKinds } from 'typescript'
import ToggleComponent from '../../ui/Toggle'
import styled from 'styled-components'
import { useYourProportionFromDatabase } from '../../../firebase/yourProporitonsDatabase'

const Td = styled.td`{
    font-weight: bold;
}`


export default function DayTable(): ReactElement {

    const core = useSelector((state: any) => state.productToStore.payload)
    const dispatch = useDispatch()

    const [carbsState, setCarbsState] = useState<number>()

    const proportions = useYourProportionFromDatabase()
    const maxCarbs = proportions.map((e: any) => e.carbs)
    const maxProteins = proportions.map((e: any) => e.proteins)
    const maxFat = proportions.map((e: any) => e.fats)
    const maxSalt = proportions.map((e: any) => e.salt)
    const maxKcal = proportions.map((e: any) => e.kcal)

    const userProducts = useAllUserProductsByDate()
    dispatch(allActions.productsToStore(userProducts))
    const ArrayOfDates = core && core.map((e: object) => Object.entries(e).map((el) => ( { [el[0]]: el[1] } )))
    const ArrayOfProductsForEachDate = ArrayOfDates && ArrayOfDates[0].map((e: object) => Object.entries(e).map((el) => Object.entries(el[1])))

    const sumColor = (sum: any, max: number) => {
        if(!isNaN(sum)) {
            if (sum/max > 1.1) {
                return <Td style={{color: 'red'}}>{`${sum} / ${max} g`}</Td>
            }
            else if (sum/max < 0.9) {
                return <Td>{`${sum} / ${max} g`}</Td>
            }
            else {
                return <Td style={{color: 'green'}}>{`${sum} / ${max} g`}</Td>
            }
        }
    }

    return (
        <>
        {ArrayOfProductsForEachDate && ArrayOfProductsForEachDate.map((dateElement: any) => {



            const dateOfTheFirstProduct = dateElement[0][0][1].date

            const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
            //carbsSum
            let arrCarbs: number[] = []
            dateElement[0].forEach((el: any) => arrCarbs.push(el[1].carbs))
            const sumArrCarbs = arrCarbs.length > 0 && Math.round((arrCarbs.reduce(reducer) + Number.EPSILON) * 100) / 100
            //proteinsSum
            let arrProteins: number[] = []
            dateElement[0].forEach((el: any) => arrProteins.push(el[1].proteins))
            const sumArrProteins = arrProteins.length > 0 && Math.round((arrProteins.reduce(reducer) + Number.EPSILON) * 100) / 100
            //fatSum
            let arrFat: number[] = []
            dateElement[0].forEach((el: any) => arrFat.push(el[1].fat))
            const sumArrFat = arrFat.length > 0 && Math.round((arrFat.reduce(reducer) + Number.EPSILON) * 100) / 100
            //saltSum
            let arrSalt: number[] = []
            dateElement[0].forEach((el: any) => arrSalt.push(el[1].salt))
            const sumArrSalt = arrSalt.length > 0 && Math.round((arrSalt.reduce(reducer) + Number.EPSILON) * 100) / 100
            //kcalSum
            let arrKcal: number[] = []
            dateElement[0].forEach((el: any) => arrKcal.push(el[1].kcal))
            const sumArrKcal = arrKcal.length > 0 && Math.round((arrKcal.reduce(reducer) + Number.EPSILON) * 100) / 100


        return(
        <div style={{padding: '2rem 5rem'}}>
            <h5>{`${dateOfTheFirstProduct}`}</h5>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">Photo</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Carbs</th>
                    <th scope="col">Proteins</th>
                    <th scope="col">Fats</th>
                    <th scope="col">Salt</th>
                    <th scope="col">Kcal</th>
                    <th scope="col">Avaliable in:</th>
                    <th scope="col" style={{width: '300px'}}>Options</th>
                    </tr>
                </thead>
                <tbody>
                {dateElement[0].map((product: any) => {
                    const {carbs, date, fat, id, productName, proteins, quantity, salt, stores, thumbnail, kcal} = product[1]

                    return(
                    <>
                        <tr key={id}>
                        <th scope="row"><img src={thumbnail} alt='Product thumbnail' style={{height: '50px'}}/></th>
                        <td>{productName}</td>
                        <td>{`${quantity}g`}</td>
                        <td>{carbs}</td>
                        <td>{proteins}</td>
                        <td>{fat}</td>
                        <td>{salt}</td>
                        <td>{kcal}</td>
                        <td>
                            <ToggleComponent
                            content={<ul style={{padding: '0'}}>{stores.map((e: string) => <li style={{ listStyle: 'none'}}>{e}</li>)}</ul>}
                            name='shops'
                            size='sm'
                            />
                        </td>
                        <td style={{width: '15%'}}><Button  style={{margin: '1rem'}} size='sm'>Change</Button><Button size='sm'>Remove</Button></td>
                        </tr>
                    </>
                    )
                })}

                    <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Carbs</th>
                    <th scope="col">Proteins</th>
                    <th scope="col">Fats</th>
                    <th scope="col">Salt</th>
                    <th scope="col">Kcal</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>

                    <tr>
                    <td></td>
                    <td></td>
                    <th scope="row">Total:</th>
                    {sumColor(sumArrCarbs, maxCarbs)}
                    {sumColor(sumArrProteins, maxProteins)}
                    {sumColor(sumArrFat, maxFat)}
                    {sumColor(sumArrSalt, maxSalt)}
                    {sumColor(sumArrKcal, maxKcal)}
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
            )
    })}
        </>
    )
}
