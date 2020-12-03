import * as React from 'react'
import styled from "styled-components";

const Label = styled('div')`
font-size: 11px;
line-height: 16px;
letter-spacing: 0.05em;
color: rgba(55,53,47,0.6);
font-weight: 500;
`

const InputContainer = styled('div')`
display: flex;
align-items: center;
width: 80%;
font-size: 15px;
line-height: 26px;
padding: 4px 10px;
position: relative;
border-radius: 3px;
box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 1px inset;
background: rgba(242, 241, 238, 0.6);
cursor: text;
margin-top: 4px;
margin-bottom: 4px;
color: black;
`

const InputWithoutBorder = styled('input')`
font-size: inherit;
line-height: inherit;
border: none;
background: none;
width: 100%;
display: block;
resize: none;
padding: 0px;
&:placeholder {
    color: #b4b6b6;
  }

}
`
interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
}

// why it doesnt work without "default" argument?
export default class Input extends React.PureComponent<Props> {
    render() {
        const {  label, ...inputProps } = this.props;

        return (
            <div>
                <Label>{label}</Label>
                <InputContainer>
                    <InputWithoutBorder {...inputProps as any} />
                </InputContainer>
            </div>
        )
    }
}
