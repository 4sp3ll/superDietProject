import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/firestore';
import fbConfig from './firestoreConfig'
import { Table } from 'reactstrap'
import { firestoreStart } from './firestoreConfig'
import allActions from '../actions/index'


export const useAllUserProductsByDate = () => {

    const [state, setState]: any = useState()

    useEffect(() => {
        const unsubscribe = firestoreStart
        .collection('userProducts')
        .onSnapshot((snapshot) => {
            console.log(snapshot)
        const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
        }));

        setState(data);
        });
    }, [])




    return state

}
// export const GetAllUserProductsByDate = ({uid}: any) => {

//     const [state, setState]: any = useState()
//     const [date, setDate] = useState()

//     const dispatch = useDispatch()

//     firestoreStart.collection("userProducts").doc(uid)
//     .onSnapshot(function(doc) {
//         console.log("Current data: ", doc.data());
//         setState(doc.data())

//     });

//  if (state) {
//      dispatch(allActions.productsToStore(state))
//  }

//     return (
//         <>
//         <p>hello</p>
//         </>
//     )

// }
// export const useDisplayAddedProducts = (uid: string, day: any, productId: any) => {
// export const useDisplayAddedProducts = (uid: string) => {

//     const docRef = firestoreStart
//     .collection("userProducts")
//     .doc(uid)
//     // .collection(day)
//     // .doc(productId);

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