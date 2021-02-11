// import React, { useState } from "react";
import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TooltipInfo = (props) => {

    return (
        <div style={{margin: '0 0 7px 2px', display: 'inline-block'}}>
            <OverlayTrigger
                key={props.key}
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
        // <span style={{ display: "inline-block", position: "relative", top: "2px", left: "5px" }}>
        //     <div style={{ fontSize: "13px" }}>
        //         <FontAwesomeIcon
        //         className="mr-1"
        //         id={"Tooltip-" + id}
        //         icon={['fas', 'info-circle']}
        //         size="lg"
        //         style={{ color: "#DCDCDC", margin: "0 0 3.5px" }}
        //         >
        //             {item.text}
        //         </FontAwesomeIcon>
        //     </div>
        //     <Tooltip
        //     placement={item.placement}
        //     isOpen={tooltipOpen}
        //     target={"Tooltip-" + id}
        //     toggle={toggle}
        //     >
        //         <span style={{ color: "#f87320" }}>{infoTitle}</span>
        //         <br/>
        //         {info}
        //     </Tooltip>
        // </span >
    );
}

export default TooltipInfo;
