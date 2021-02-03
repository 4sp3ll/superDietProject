import React, { ReactElement, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { useAllUserProductsByDate } from '../../../firebase/DisplayAddedProducts'
import allActions from '../../../actions'
import { store } from '../../..'
import { OuterExpressionKinds } from 'typescript'
interface Props {

}

export default function DayTable({}: Props): ReactElement {

    const [quantityState, setQuantityState] = useState(false)
    const uid = useSelector((state: any) => state.firebase.auth.uid)
    const core = useSelector((state: any) => state.productToStore.payload)
    const dispatch = useDispatch()

    // const {datesObjects}  = useSelector((state: any) => {
    //     datesObjects: state.productToStore.payload[0][20200201].di
    // })

    // console.log(datesObjects)
    // const addedProducts = useDisplayAddedProducts()
    // console.log(addedProducts)
    // useDisplayAddedProducts(uid, '20210201', '20149567')
    // useDisplayAddedProducts(uid)

    const userProducts = useAllUserProductsByDate()
    dispatch(allActions.productsToStore(userProducts))
    console.log(core)
    const ArrayOfDates = core && core.map((e: object) => Object.entries(e).map((el) => ( { [el[0]]: el[1] } )))
    //where [0]: product id, [1]: product property
    const ArrayOfProductsForEachDate = ArrayOfDates && ArrayOfDates[0].map((e: object) => Object.entries(e).map((el) => Object.entries(el[1])))
    const amountOfDates = ArrayOfDates && ArrayOfDates[0]
    // console.log('dupa00', ArrayOfDates)
    // console.log('dupa1', ArrayOfProductsForEachDate && ArrayOfProductsForEachDate.map((e: any) => e[0]))
    // console.log('dupa2', ArrayOfProductsForEachDate)
    // const obj =  console.log('dupaCore', ArrayOfProductsForEachDate && ArrayOfProductsForEachDate.map((e: any) => e[0].map((el: any) => el[0])))
    // const obj =  console.log('dupaCore', ArrayOfProductsForEachDate && ArrayOfProductsForEachDate.map((e: any) => e[0]))
    // .map((el: any) => el[0])))




    return (
        <>
        {ArrayOfProductsForEachDate && ArrayOfProductsForEachDate.map((dateElement: any) => {
            // potrzebne mi z poziomu dateElement daty
            const dateOfTheFirstProduct = dateElement[0][0][1].date
            console.log('dateElement', dateElement[0].map((productElement: any) => productElement[1]))
            // dateElement.map((productElement: any) => {
            // console.log(productElement[0][1])
            // console.log('to jest productElement', productElement)

            // const {carbs, fat, proteins, quantity, salt, date, id, productName, stores, thumbnail} = productElement[0][1]
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
                                {/* {productElement.map((e: any) => { */}
                                    {/* {console.log('to jest e', e)} */}
                                    {/* return( */}
                                    {/* <> */}
                                    <tr>
                                        {/* {addedProducts.map((e: any) => <td>{e}</td>)} */}

                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>{quantityState ? <input/> : 'Example'}</td>
                                    <td scope="col">Carbs</td>
                                    <td scope="col">Proteins</td>
                                    <td scope="col">Fats</td>
                                    <td scope="col">Salt</td>
                                    <td scope="col"></td>
                                    <td><Button style={{margin: '0 2rem 0 2rem'}} size='sm'>Change</Button><Button size='sm'>Remove</Button></td>
                                    </tr>
                                    {/* </> */}
                                    {/* ) */}
                                {/* })} */}
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>Thornton</td>
                                    <td scope="col">Carbs</td>
                                    <td scope="col">Proteins</td>
                                    <td scope="col">Fats</td>
                                    <td scope="col">Salt</td>
                                    <td scope="col"></td>
                                    <td><Button style={{margin: '0 2rem 0 2rem'}} size='sm'>Change</Button><Button size='sm'>Remove</Button></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                    <td scope="col">Carbs</td>
                                    <td scope="col">Proteins</td>
                                    <td scope="col">Fats</td>
                                    <td scope="col">Salt</td>
                                    <td scope="col"></td>
                                    <td><Button style={{margin: '0 2rem 0 2rem'}} size='sm' onClick={() => setQuantityState(true)}>Change</Button><Button size='sm'>Remove</Button></td>
                                    </tr>

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

                                    <td>{}</td>
                                    <td></td>
                                    <th scope="row">Total:</th>
                                    <td>20/30 g</td>
                                    {/* green here */}
                                    <td>80/80 g</td>
                                    {/* red here */}
                                    <td>170/180 g</td>
                                    <td>3.2/5 g</td>
                                    <td>2200 Kcal</td>
                                    <td></td>
                                    <td></td>
                                    </tr>
                                </tbody>
                            </table>
            </div>
            )
    // })})}
    })}
        </>
    )
}
