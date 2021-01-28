import React, { ReactElement, useState } from 'react'
import { Button } from 'react-bootstrap'

interface Props {

}

export default function DayTable({}: Props): ReactElement {

    const [quantityState, setQuantityState] = useState(false)

    const handleRemove = () => {
        console.log('remove')
    }

    // useEffect(() => {
    // }, [quantityState])

    const handleQuantity = () => {
        console.log('quantity')
    }

    console.log(quantityState)

    return (
        <div style={{padding: '2rem 5rem'}}>
            <h5>{`Day ${Date.now()}`}</h5>
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
                                    <tr>
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

                                    <td></td>
                                    <td></td>
                                    <th scope="row">Total:</th>
                                    <td>20 g</td>
                                    <td>80 g</td>
                                    <td>170 g</td>
                                    <td>3.2 g</td>
                                    <td>2200 Kcal</td>
                                    <td></td>
                                    <td></td>
                                    </tr>
                                </tbody>
                            </table>
        </div>
    )
}
