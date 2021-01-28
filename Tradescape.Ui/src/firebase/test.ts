import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/firestore';
import fbConfig from './firestoreConfig'

export const yourProportionsToDatabase = (uid: string | undefined, yourProportionData: any) => async () => {
// export const yourProportionsToDatabase = () => async ({ getFirebase, getFirestore }: any) => {
// export const yourProportionsToDatabase = () => async (getFirebase: any) => {
    // const firestore = getFirebase()
    const db = firebase.firestore(fbConfig)
    // const firestore = getFirebase().firestore()


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