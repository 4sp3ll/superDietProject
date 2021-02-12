import { useState, useEffect } from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
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


export const useYourProportionFromDatabase = (uid: any) => {

    const [proportions, setProportions]: any = useState([]);

    useEffect(() => {
      const unsubscribe = firebase
        .firestore()
        .collection('userProportions')
        // .doc(uid)
        .onSnapshot((snapshot) => {
          // mapujesz proporcje wszystkich uid w bazie
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          // const data = {
          //   id: snapshot.id,
          //   ...snapshot.data()
          // }
          // console.log(data)
          // debugger
          setProportions(data);
        });
    }, []);

    return proportions

}