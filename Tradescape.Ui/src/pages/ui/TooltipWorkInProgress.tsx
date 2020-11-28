import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const TooltipWorkInProgress = (props: any) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <p><span id="TooltipWork"></span></p>
      <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipWork" toggle={toggle}>
        w przygotowaniu...
      </Tooltip>
    </div>
  );
}

export default TooltipWorkInProgress;