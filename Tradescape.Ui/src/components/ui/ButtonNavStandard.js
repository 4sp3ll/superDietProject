import React from 'react';
import { Button } from 'reactstrap';
import { prependOnceListener } from 'process';

const ButtonNavStandard = props => {
    return (
        <div>
            <Button color="secondary" outline>
                {props.name}
            </Button>
        </div>
    );
}

export default ButtonNavStandard;