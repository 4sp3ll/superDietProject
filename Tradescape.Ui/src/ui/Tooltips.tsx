// import React, { useState } from "react";
import React, { useState, useRef } from "react";
import { Tooltip, Button, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FontAwesomeIconProps } from '@fortawesome/react-fontawesome';


const TooltipItem = (props: any) => {
    // const { item, id, infoTitle, info } = props;
    // const [tooltipOpen, setTooltipOpen] = useState(false);

    // const toggle = () => setTooltipOpen(!tooltipOpen);

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <Button ref={target} onClick={() => setShow(!show)}>
                Click me!
            </Button>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>} placement="right">
            {(props) => (
            <Tooltip id="overlay-example" {...props}>
                My Tooltip
            </Tooltip>
            )}
            </OverlayTrigger>
        </>
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
};

const Tooltips = () => {
    return (
        <>
            {[
                {
                    placement: "right",
                    text: "Pokaż dodatkowe filtry dostępne tylko dla wybranej kategorii"
                }
            ].map((tooltip, index) => {
                return <TooltipItem key={index} item={tooltip} id={index} />;
            })}
        </>
    );
};

export default Tooltips;
