import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/firestore';
import fbConfig from './firestoreConfig'
import { Table } from 'reactstrap'
import { firestoreStart } from './firestoreConfig'

interface YourProportion {
    yourCarbo: string,
    yourProtein: string,
    yourFat: string,
    yourSalt: string,
    yourKcal: string,
}

export const yourProportionsToDatabase = (uid: string | undefined, kcal: string, yourProportionData: YourProportion) => {

    try {
        // await db
        firestoreStart
        .collection('userProportions', )
        .doc(uid)
        .set({
            carbs: yourProportionData.yourCarbo,
            proteins: yourProportionData.yourProtein,
            fats: yourProportionData.yourFat,
            salt: yourProportionData.yourSalt,
            kcal: kcal
        })
    } catch (err) {console.log(err)}
}


export const YourProportionFromDatabase = () => {

   // tutaj zamiast lokalnego stanu przekaż to do reduxa
    const [proportions, setProportions]: any = useState([]);

    useEffect(() => {
      const unsubscribe = firebase
        .firestore()
        .collection('userProportions')
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setProportions(data);
        });
    }, []);

    return (
        // przepisz to do osobnego komponentu
        <div>
        <Table bordered size='sm' >
            <thead>
                <tr>
                <th>Carbs</th>
                <th>Proteins</th>
                <th>Fats</th>
                <th>Salt</th>
                <th>Kcal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{proportions.map((e: any) => e.carbs)}</td>
                <td>{proportions.map((e: any) => e.proteins)}</td>
                <td>{proportions.map((e: any) => e.fats)}</td>
                <td>{proportions.map((e: any) => e.salt)}</td>
                <td>{proportions.map((e: any) => e.kcal)}</td>
                </tr>
            </tbody>
            </Table>
        </div>
        )
}

// export const yourProportionFromDatabase = async (uid: string | undefined) => {
//     const db = firebase.firestore(fbConfig)

//     const docRef = db.collection("users").doc(uid);

//     await docRef
//     .get()
//     .then(function(doc) {
//         if (doc.exists) {
//             return doc.data()
//             // return console.log(doc.data())
//         } else {
//             console.log("No such document!");
//         }
//     }).catch(function(error) {
//         console.log("Error getting document:", error);
//     })
// }