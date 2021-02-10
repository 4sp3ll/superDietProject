import React, { useState } from 'react';
import { Collapse, Button, Card } from 'react-bootstrap';

interface Props {
    content: any,
    name: string,
    additionalNote?: string,
    size?: 'sm' | 'lg'
}

const ToggleComponent = (props: Props) => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
      size={props.size}
      variant="orange-light"
      onClick={() => setOpen(!open)}
      style={{ margin: '1rem 1rem 1rem 0' }}
      aria-controls="collapse-button"
      aria-expanded={open}
      >
        {open ? 'show less' : props.name}
      </Button>
      <Collapse in={open}>
        <Card>
          <Card.Body>
            {props.content}
            <br/>
            {props.additionalNote}
          </Card.Body>
        </Card>
      </Collapse>
    </div>
  );
}

export default ToggleComponent;