import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/firestore';
import app from './firebase'

interface YourProportion {
    yourCarbo: string,
    yourProtein: string,
    yourFat: string,
    yourSalt: string,
    yourKcal: string,
}

// async is necessary here?
export const yourProportionsToDatabase = async (uid: string | undefined, yourProportionData: YourProportion) => {
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


export const yourProportionFromDatabase = (uid: string | undefined) => {
    const db = firebase.firestore(app)

    const docRef = db.collection("users").doc(uid);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                return doc.data()
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        })
}