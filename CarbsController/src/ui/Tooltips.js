import React from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TooltipInfo = (props) => {

    return (
        <div style={{margin: '0 0 7px 2px', display: 'inline-block'}}>
            <OverlayTrigger
                key={props.keyName}
                placement={props.placement}
                overlay={
                    <Tooltip id={props.id}>
                    {props.message}
                    </Tooltip>}
                >
                <FontAwesomeIcon
                icon={['fas', 'info-circle']}
                id={props.id}
                size={props.iconSize}
                style={{padding: '0 0 2px 0', color: '#b8b8b8'}}
                />
            </OverlayTrigger>
        </div>
    );
}

export default TooltipInfo;
