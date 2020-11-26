import React from 'react'
import {ButtonGroup, Button} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdditionalOptionsButtonMobile = () => {
    return (
        <ButtonGroup vertical >            
            <Button color="warning" style={{ backgroundColor: "#fce3c5", color: "#000000", border: "1px solid #dcbd9c"}}><FontAwesomeIcon style={{ color: "#696969", stroke: "black", strokeWidth: "30", fontSize: '1.9em ' }}  icon={['fas', 'info-circle']} size="2x" /></Button>
            <Button color="warning" style={{ backgroundColor: "#fce3c5", color: "#000000", border: "1px solid #dcbd9c"}}><FontAwesomeIcon style={{ color: "#696969", stroke: "black", strokeWidth: "30", fontSize: '1.9em ' }} icon={['fas', 'search']} size="2x" /></Button>
            <Button color="warning" style={{ backgroundColor: "#fce3c5", color: "#000000", border: "1px solid #dcbd9c"}}><FontAwesomeIcon style={{ color: "#696969", stroke: "black", strokeWidth: "30", fontSize: '1.9em ' }} icon={['fas', 'sign-out-alt']} size="2x" /></Button>
        </ButtonGroup>
    )
}

export default AdditionalOptionsButtonMobile