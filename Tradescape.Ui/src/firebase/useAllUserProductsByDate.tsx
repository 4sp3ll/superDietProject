import { useState, useEffect } from 'react'
import 'firebase/firestore';
import { firestoreStart } from './firestoreConfig'

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
