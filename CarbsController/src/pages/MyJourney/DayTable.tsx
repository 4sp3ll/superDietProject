import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import styled from 'styled-components'
import ProductElement from './ProductElement'
import { useFirestoreConnect } from "react-redux-firebase";

const Td = styled.td`{
    font-weight: bold;
}`

export default function DayTable(): ReactElement {

    const core = useSelector((state: any) => state.firestore.data.userProducts)
    const uid = useSelector((state: any) => state.firebase.auth.uid)
    const proportions = useSelector((state: any) => state.firestore.data.proportions)

    const maxCarbs = proportions ? proportions.carbs : ''
    const maxProteins = proportions ? proportions.proteins : ''
    const maxFat = proportions ? proportions.fats : ''
    const maxSalt = proportions ? proportions.salt : ''
    const maxKcal = proportions ? proportions.kcal : ''

    const arrayOfDateObj = core && Object.entries(core).map((e) => ( { [e[0]]: e[1] } ));

    useFirestoreConnect({
        collection: `userProducts`,
        doc: uid,
        storeAs: 'userProducts'
      })

    const ArrayOfDates = arrayOfDateObj && arrayOfDateObj.map((e: object) => Object.entries(e).map((el) => ( { [el[0]]: el[1] } )))
    const ArrayOfProductsForEachDate = ArrayOfDates && ArrayOfDates.map((e: any) => e.map((e2: any) => Object.entries(e2).map((el: any) => Object.entries(el[1]))))

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
        {ArrayOfProductsForEachDate && ArrayOfProductsForEachDate.reverse().map((dateElement: any) => {

            const dateOfTheFirstProduct = dateElement[0][0][0][1].date
            let dateOutput = [dateOfTheFirstProduct.slice(0, 4), '/', dateOfTheFirstProduct.slice(4, 6), '/', dateOfTheFirstProduct.slice(6, 8)].join('');

            const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
            //carbsSum
            let arrCarbs: number[] = []
            dateElement[0][0].forEach((el: any) => arrCarbs.push((el[1].carbs)))
            const sumArrCarbs = arrCarbs.length > 0 && Math.round((arrCarbs.reduce(reducer) + Number.EPSILON))
            //proteinsSum
            let arrProteins: number[] = []
            dateElement[0][0].forEach((el: any) => arrProteins.push((el[1].proteins)))
            const sumArrProteins = arrProteins.length > 0 && Math.round((arrProteins.reduce(reducer) + Number.EPSILON))
            //fatSum
            let arrFat: number[] = []
            dateElement[0][0].forEach((el: any) => arrFat.push((el[1].fat)))
            const sumArrFat = arrFat.length > 0 && Math.round((arrFat.reduce(reducer) + Number.EPSILON))
            //saltSum
            let arrSalt: number[] = []
            dateElement[0][0].forEach((el: any) => arrSalt.push((el[1].salt)))
            const sumArrSalt = arrSalt.length > 0 && Math.round((arrSalt.reduce(reducer) + Number.EPSILON))
            //kcalSum
            let arrKcal: number[] = []
            dateElement[0][0].forEach((el: any) => arrKcal.push((el[1].kcal)))
            const sumArrKcal = arrKcal.length > 0 && Math.round((arrKcal.reduce(reducer) + Number.EPSILON))


        return(
        <div style={{padding: '2rem'}}>
            <h5>{`${dateOutput}`}</h5>
                <Table bordered striped responsive key={dateOutput}>
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
                    <th scope="col" style={{width: '10rem'}}>Avaliable in:</th>
                    <th scope="col" style={{width: '20rem'}}>Options</th>
                    </tr>
                </thead>
                <tbody>
                {dateElement[0][0].map((product: any, index: number) => {
                    const {carbs, date, fat, id, productName, proteins, quantity, salt, stores, thumbnail, kcal} = product[1]
                    const specificDateElement = dateElement[0][0]
                    // const specificDateElement = dateElement[0]

                    return(
                        <ProductElement
                        uid={uid}
                        index={index}
                        carbs={carbs}
                        date={date}
                        fat={fat}
                        id={id}
                        productName={productName}
                        proteins={proteins}
                        quantity={quantity}
                        salt={salt}
                        stores={stores}
                        thumbnail={thumbnail}
                        kcal={kcal}
                        dateElement={specificDateElement}
                        />
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
            </Table>
            </div>
            )
    })}
        </>
    )
}
