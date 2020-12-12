import styled from 'styled-components';

const RedButton = styled("button")`
cursor: pointer;
user-select: none;
transition: background 120ms ease-in 0s;
display: inline-flex;
align-items: center;
white-space: nowrap; height: 36px;
border-radius: 3px;
color: black;
font-size: 14px; line-height: 1;
padding-left: 12px; padding-right: 12px;
background: rgba(66,133,244, 0.6);
font-weight: 500;
box-shadow: rgba(15, 15, 15, 0.1) 0px 1px 2px, rgba(235, 87, 87, 0.3) 0px 0px 0px 1px inset;
width: 10%;
justify-content: center;
&:hover {
    background-color: rgba(66,133,244, 0.8)
    // color: rgb(247, 202, 24, 1);
}
`
// try to check out why "export const RedButton = ..." doesnt work
export default RedButton;