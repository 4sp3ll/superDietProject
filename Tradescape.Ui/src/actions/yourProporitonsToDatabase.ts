import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

export const yourProportionsToDatabase = () => async ({ getFirebase, getFirestore }: any) => {
// export const yourProportionsToDatabase = () => async (getFirebase: any) => {
    // const firebase = getFirebase()
    const firestore = getFirestore()
    // const firestore = getFirebase().firestore()
    const uid = useSelector((state: any) => state.firebase.auth.uid)
    const data = useSelector((state: any) => state.yourProportions)
    console.log(uid)

    try {
        await firestore
        .collectiion('users', )
        .doc(uid)
        .set({
            yourCarbo: data.yourCarbo,
            yourProtein: data.yourProtein,
            yourFat: data.yourFat,
            yourSalt: data.yourSalt,
            yourKcal: data.yourKcal
        })
    } catch (err) {console.log(err)}
}