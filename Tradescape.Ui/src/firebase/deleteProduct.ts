import React, { ReactElement } from 'react'
import { firestoreStart } from './firestoreConfig'
import firebase from 'firebase/app';
import 'firebase/firestore'



export default function deleteProduct(date: string, productId: string, uid: string) {

    const dateRef = firestoreStart.collection('userProducts').doc(uid)

    dateRef.update({
        [`${date}.${productId}`]: firebase.firestore.FieldValue.delete()
    }).then(() => {
        console.log("Document successfully updated!");
    }).catch((error) => {
        console.error("Error updating document: ", error);
    });
}
