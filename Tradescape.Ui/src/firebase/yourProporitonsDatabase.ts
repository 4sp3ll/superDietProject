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

export const yourProportionFromDatabase = (uid: string | undefined) => {
    const db = firebase.firestore(app)
    const docRef = db.collection("users").doc(uid);

    docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return 'dupa'
    }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    })
}

// import { useFirestoreConnect } from 'react-redux-firebase'

// export default function SomeComponent() {
//   useFirestoreConnect([
//     { collection: 'todos' } // or 'todos'
//   ])
//   const todos = useSelector((state) => state.firestore.ordered.todos)
// }