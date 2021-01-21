import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

interface Props {
    content: any,
    name: string,
    additionalNote?: string
}

const ToggleComponent = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="success" onClick={toggle} style={{ margin: '1rem 1rem 1rem 0' }}>{isOpen ? 'show less' : props.name}</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          {props.content}
          <br/>
          {props.additionalNote}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default ToggleComponent;