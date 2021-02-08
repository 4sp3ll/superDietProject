import React, { useState } from 'react'
import { Input } from 'reactstrap'
import { useDispatch } from 'react-redux'
import allActions from '../../../actions/index'
import styled from 'styled-components'
import { Alert } from 'react-bootstrap'


// zastanów się jak to uprościć, map?


export const MinSalt = () => {
    const dispatch = useDispatch()
    return (
        <>
            <Input
                type="number"
                min="0"
                max="99"
                oninput="this.value = Math.abs(this.value)"
                autoComplete="off"
                name="text"
                style={{margin: '.8vh 0 .8vh 0'}}
                id="minRevenue"
                placeholder="min salt"
                onChange={(e) => {
                    dispatch(allActions.minSalt(e.target.value))
                }} />
        </>
    )
}

export const MaxSalt = () => {
    const dispatch = useDispatch()
    return (
        <>
            <Input
                type="number"
                min="1"
                max="100"
                oninput="this.value = Math.abs(this.value)"
                autoComplete="off"
                name="text"
                style={{margin: '.8vh 0 .8vh 0'}}
                id="maxRevenue"
                placeholder="max salt"
                onChange={(e) => {
                    dispatch(allActions.maxSalt(e.target.value))
                }} />
        </>
    )
}
export const MinFiber = () => {
    const dispatch = useDispatch()
    return (
        <>
            <Input
                type="number"
                min="0"
                max="99"
                oninput="this.value = Math.abs(this.value)"
                autoComplete="off"
                name="text"
                style={{margin: '.8vh 0 .8vh 0'}}
                id="minCommission"
                placeholder="min fiber"
                onChange={(e) => {
                        dispatch(allActions.minFiber(e.target.value))
                }} />
        </>
    )
}
export const MaxFiber = () => {
    const dispatch = useDispatch()
    return (
        <>
            <Input
                type="number"
                min="1"
                max="100"
                oninput="this.value = Math.abs(this.value); "
                autoComplete="off"
                name="text"
                style={{margin: '.8vh 0 .8vh 0'}}
                id="maxCommission"
                placeholder="max fiber"
                onChange={(e) => {
                    dispatch(allActions.maxFiber(e.target.value))
                }} />
        </>
    )
}


export const ContainWords = () => {
    const dispatch = useDispatch()
    const regex = new RegExp('^[A-Za-z0-9.-]+$')
    const [state, setState] = useState()
    const [error, setError] = useState('')

    return (
        <>
            <Input
                label="text"
                type="text"
                name="text"
                value={state}
                autoComplete="off"
                size={39}
                id="containWords"
                placeholder="e.g. butter"
                onChange={(e: any) => {
                    if (e.target.value.match(regex) || e.target.value === '') {
                        setState(e.target.value)
                        dispatch(allActions.containWords(e.target.value))
                    } else {
                        setError('You can choose only one product keyword at a time.')
                    }
                }}
                onBlur={() => error && setError('')}
            />
            {error && <Alert variant='danger' style={{fontSize: '12px'}}>{error}</Alert>}
        </>
    )
}

export const ShopTag = () => {
    const dispatch = useDispatch()
    const regex = new RegExp('^[A-Za-z0-9.-]+$')
    const [state, setState] = useState()
    const [error, setError] = useState('')

    return (
        <>
            <Input
                label="text"
                type="text"
                name="text"
                value={state}
                autoComplete="off"
                size={39}
                id="shopTag"
                placeholder="e.g. lidl"
                onChange={(e: any) => {
                    if (e.target.value.match(regex) || e.target.value === '') {
                        setState(e.target.value)
                        dispatch(allActions.shopTag(e.target.value))
                    } else {
                        setError('You can choose only one shop at a time.')
                    }
                }}
                onBlur={() => error && setError('')}
            />
            {error && <Alert variant='danger' style={{fontSize: '12px'}}>{error}</Alert>}

        </>
    )
}

export const LabelsFilter = ({name, type}: any) => {
    const dispatch = useDispatch()

    return (
        <div className='d-inline-block' style={{border: '0.1px solid', borderColor: 'rgb(230, 230, 230)', borderRadius: '5px', margin: '2px'}}>
            <p style={{margin: '7px'}}>{name}</p>


            <div style={{margin: '7px'}} className='d-block d-md-inline-block'>
                <label className={`radio-button-container ${type}`} >Doesn't matter
                    <input
                    defaultChecked
                    onChange={() => {
                        dispatch(allActions.additionalFilterLabelDoesntMatter(type.toUpperCase()))
                    }}
                    type="radio"
                    id={`radio-button-container ${type}`}
                    name={`radio-button-container ${type}`}
                    data-label="Doesn't matter"
                    />
                    <span className="radio-button-checkmark"></span>
                </label>
            </div>
            <div style={{margin: '7px'}} className='d-block d-md-inline-block'>
                <label className={`radio-button-container ${type}`} >Yes
                    <input
                    onChange={() => {
                        dispatch(allActions.additionalFilterLabelYes(type.toUpperCase()))
                    }}
                    type="radio"
                    id={`radio-button-container ${type}2`}
                    // name="radio-button-container"
                    name={`radio-button-container ${type}`}
                    data-label="Yes"
                    // inline
                    />
                    <span className="radio-button-checkmark"></span>
                </label>

            </div>
        </div>

    )
}