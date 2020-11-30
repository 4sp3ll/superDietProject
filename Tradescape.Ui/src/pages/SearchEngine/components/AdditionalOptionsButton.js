import React from 'react'
import {ButtonGroup, Button} from 'reactstrap'

const AdditionalOptionsButton = () => {
    return (
        <ButtonGroup vertical >
                <Button color="warning" style={{ backgroundColor: "#fce3c5", color: "#000000", border: "1px solid #dcbd9c", padding: '' }}>Wejdź w szczegóły</Button>
                <Button color="warning" target="_blank" style={{ width: "200px", backgroundColor: "#fce3c5", color: "#000000", border: "1px solid #dcbd9c" }}>Sprawdź sezonowość</Button>
                <Button color="warning" target="_blank" style={{ width: "200px", backgroundColor: "#fce3c5", color: "#000000", border: "1px solid #dcbd9c" }}>Zobacz na Allegro</Button>
        </ButtonGroup>
    )
}

export default AdditionalOptionsButton