import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Collapse, Button, Card, FormControl } from 'react-bootstrap';
import addProductToDatabase from '../firebase/addProductToDatabase'
import allActions from '../redux/actions'

interface Props {
    content?: any,
    name: string,
    additionalNote?: string,
    size?: 'sm' | 'lg',
    type: 'card' | 'input',
    afterClickName: string,
    product?: any,
    variant: string
}

const ToggleComponent = (props: Props) => {

  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState<number>()

  const dispatch = useDispatch()

  const handleType = () => {
    if(props.type === 'card') {
          return (
            <>
              <Card>
                  <Card.Body>
                  {props.content}
                  <br/>
                  {props.additionalNote}
                </Card.Body>
              </Card>
            </>
          )
    }
    else if (props.type === 'input') {
      return (
        <>
          <FormControl
          className='quantity-input-product-details'
          onChange={(e: any) => setQuantity(parseInt(e.target.value))}
          value={quantity}
          type="number"
          min="1"
          max="10000000000"
          placeholder='quantity'
          />
        </>
      )
    }
  }

  return (
    <div>
      <Button
      size={props.size}
      variant={props.variant}
      onClick={() => {
        setOpen(!open);
        props.type === 'input' && dispatch(allActions.keepProduct(props.product, quantity));
        props.type === 'input' && addProductToDatabase()}
      }
      style={{ margin: '1rem 0 1rem 0'}}
      aria-controls="collapse-button"
      aria-expanded={open}
      >
        {open ? props.afterClickName : props.name}
      </Button>
      <Collapse in={open}>
        <Card>
          {handleType()}
       </Card>
      </Collapse>
    </div>
  );
}

export default ToggleComponent;