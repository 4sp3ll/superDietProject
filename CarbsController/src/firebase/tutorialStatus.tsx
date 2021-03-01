import React from 'react'
import { firestoreStart } from './firestoreConfig'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from "react-redux-firebase";

export const tutorialStatusToFirestore = (uid: string) => {

    try {
        firestoreStart
        .collection('tutorialStatus')
        .doc(uid)
        .set({
            offTutorial: true
        })

      } catch (err) {console.log(err)}
}
