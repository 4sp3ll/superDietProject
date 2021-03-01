import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import 'firebase/firestore';
import { firestoreStart } from './firestoreConfig'
import { useFirestoreConnect } from "react-redux-firebase";

export const useAllUserProductsByDate = () => {
    // const [state, setState]: any = useState()

    // useEffect(() => {
    //     firestoreStart
    //     .collection('userProducts')
    //     .onSnapshot((snapshot) => {
    //     const data = snapshot.docs.map((doc) => ({
    //         ...doc.data(),
    //     }));
    //     setState(data);
    //     });
    // }, [])

    // return state

    const { uid } = useSelector((state: any) => state.firebase.auth);
    useFirestoreConnect({
      collection: `userProducts`,
      doc: uid,
      storeAs: 'userProducts'
    })

    return null
}
