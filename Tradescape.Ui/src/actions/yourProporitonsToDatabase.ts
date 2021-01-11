import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/firestore';
import app from '../firebase/firebase'

interface YourProportion {
    yourCarbo: string,
    yourProtein: string,
    yourFat: string,
    yourSalt: string,
    yourKcal: string,
}

export const yourProportionsToDatabase = (uid: string | undefined, yourProportionData: YourProportion) => async () => {
    const db = firebase.firestore(app)

    try {
        await db
        .collection('users', )
        .doc(uid)
        .set({
            yourCarbo: yourProportionData.yourCarbo,
            yourProtein: yourProportionData.yourProtein,
            yourFat: yourProportionData.yourFat,
            yourSalt: yourProportionData.yourSalt,
            yourKcal: yourProportionData.yourKcal
        })
    } catch (err) {console.log(err)}
}