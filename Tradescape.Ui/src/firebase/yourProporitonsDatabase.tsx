import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/firestore';
import fbConfig from './firebase'

interface YourProportion {
    yourCarbo: string,
    yourProtein: string,
    yourFat: string,
    yourSalt: string,
    yourKcal: string,
}

// async is necessary here?
export const yourProportionsToDatabase = async (uid: string | undefined, yourProportionData: YourProportion) => {
    const db = firebase.firestore(fbConfig)

    try {
        await db
        .collection('userProportions', )
        .doc(uid)
        .set({
            Carbs: yourProportionData.yourCarbo,
            Proteins: yourProportionData.yourProtein,
            Fats: yourProportionData.yourFat,
            Salt: yourProportionData.yourSalt,
            Kcal: yourProportionData.yourKcal
        })
    } catch (err) {console.log(err)}
}


export const yourProportionFromDatabase = async (uid: string | undefined) => {
    const db = firebase.firestore(fbConfig)

    const docRef = db.collection("users").doc(uid);

    await docRef
    .get()
    .then(function(doc) {
        if (doc.exists) {
            return doc.data()
            // return console.log(doc.data())
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    })
}