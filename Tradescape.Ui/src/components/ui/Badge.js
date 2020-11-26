import React from 'react';
import { Badge, Button } from 'reactstrap';

const BadgeNav = (props) => {
    return (
        <div>
            <Button color="secondary" outline>
                Moje produkty <Badge style={{ backgroundColor: "#f87320" }}>36</Badge>
            </Button>
        </div>
    );
}

export default BadgeNav;