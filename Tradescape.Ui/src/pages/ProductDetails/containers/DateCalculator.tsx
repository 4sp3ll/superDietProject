import React from 'react'
import { connect } from 'react-redux'

interface ToProps {
    state?: object,
    apiAnswerOfferId?: any,
    currentState?: object,
    data?: object,
    date?: number,
    alreadyRunningOrBeginningDate: boolean
  }

const DateCalculator = (props: ToProps) => {

    const beginningDate = props.date

    let beginningToDate: string | null = null
    let alreadyRunningToDate: number | string | null = null

    //alreadyRunning
    const currentDate = Date.now()
    if (beginningDate !== undefined) {
        const daysLeft = (currentDate - beginningDate)
        const calculateDays = new Date(daysLeft).getHours() / 24


        if (calculateDays < 1) {
            alreadyRunningToDate = 'wystawione w ciągu ostanich 24 godzin'
        } else {
            alreadyRunningToDate = Math.round(calculateDays)
        }
    }


    // beginningDate
    if (beginningDate !== undefined) {
        const milliseconds = beginningDate * 1000
        const dateObject = new Date(milliseconds)

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        beginningToDate = dateObject.toLocaleDateString('pl-PL', options)// wtorek, 2019-12-9
    }

    const handleResult = () => {
        if (beginningDate !== undefined) {
            return props.alreadyRunningOrBeginningDate ? alreadyRunningToDate : beginningToDate
        } else {
            return null
        }

    }

    return (
        <>
        {handleResult()}
        </>
    )
}

   const mapStateToProps = (state: ToProps)  => ({
    date: state.apiAnswerOfferId.currentState.data.date
    })


   export default connect(mapStateToProps)(DateCalculator)