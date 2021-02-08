import React from 'react';
import { Badge, Button } from 'reactstrap';

const BadgeNav = ({title, amount}) => {


    return (
        <div>
            <Button color="secondary" outline>
                {title} <Badge style={{ backgroundColor: "#f87320" }}>Day: {amount}</Badge>
            </Button>
        </div>
    );
}

export default BadgeNav;