import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/firestore';
import fbConfig from './firestoreConfig'
import { Table } from 'reactstrap'
import { firestoreStart } from './firestoreConfig'



export const useTakeUserDatesHistory = (uid: string) => {

    // const docRef = firestoreStart
    // .collection("userProducts")
    // .doc(uid)
    // .where()

    // docRef.get().then(function(doc) {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch(function(error) {
    //     console.log("Error getting document:", error);
    // });

}

// export const useDisplayAddedProducts = (uid: string, day: any, productId: any) => {

//     const docRef = firestoreStart
//     .collection("userProducts")
//     .doc(uid)
//     .collection(day)
//     .doc(productId);

//     docRef.get().then(function(doc) {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch(function(error) {
//         console.log("Error getting document:", error);
//     });

// }