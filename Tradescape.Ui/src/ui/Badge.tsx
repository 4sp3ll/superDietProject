import React from 'react';
import { Badge, Button } from 'react-bootstrap';

interface Props {
    title: string,
    amount: number | undefined
}

const BadgeNav = ({title, amount}: Props) => {

    return (
        <div>
            <Button variant='white'>
                {title} <Badge style={{ backgroundColor: "#f87320" }} variant='success'>Day: {amount}</Badge>
            </Button>
        </div>
    );
}

export default BadgeNav;