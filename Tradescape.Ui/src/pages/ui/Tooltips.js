import React, { useState } from "react";
import { Tooltip } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TooltipItem = props => {
    const { item, id, infoTitle, info } = props;
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <span style={{ display: "inline-block", position: "relative", top: "2px", left: "5px" }}>
            <div style={{ fontSize: "13px" }}>
                <FontAwesomeIcon
                className="mr-1"
                id={"Tooltip-" + id}
                icon={['fas', 'info-circle']}
                size="lg"
                style={{ color: "#DCDCDC", margin: "0 0 3.5px" }}
                >
                    {item.text}
                </FontAwesomeIcon>
            </div>
            <Tooltip
            placement={item.placement}
            isOpen={tooltipOpen}
            target={"Tooltip-" + id}
            toggle={toggle}
            >
                <span style={{ color: "#f87320" }}>{infoTitle}</span>
                <br/>
                {info}
            </Tooltip>
        </span >
    );
};

const Tooltips = props => {
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
