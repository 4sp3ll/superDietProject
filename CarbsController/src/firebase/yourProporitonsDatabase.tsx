import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { firestoreStart } from './firestoreConfig'
import { useFirestoreConnect } from "react-redux-firebase";
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


export const useYourProportionFromDatabase = () => {

  const { uid } = useSelector((state: any) => state.firebase.auth);
  useFirestoreConnect({
    collection: `userProportions`,
    doc: uid,
    storeAs: 'proportions'
  })

  return null
}
// export const useYourProportionFromDatabase = (uid: any) => {

//     const [proportions, setProportions]: any = useState();

//     useEffect(() => {
//       const unsubscribe = firebase
//         .firestore()
//         .collection('userProportions')
//         .doc(uid)
//         .get().then((doc) => {
//           if (doc.exists) {
//             console.log("Document data:", doc.data());
//             // setProportions(doc.data());
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//       }).catch((error) => {
//           console.log("Error getting document:", error);
//       });
//     })

//     console.log('PROPORTIONS', proportions)
//     return proportions
// }
// export const useYourProportionFromDatabase = (uid: any) => {

//     const [proportions, setProportions]: any = useState([]);


//     useEffect(() => {
//       const unsubscribe = firebase
//         .firestore()
//         .collection('userProportions')
//         // .doc(uid)
//         .onSnapshot((snapshot) => {
//           // mapujesz proporcje wszystkich uid w bazie
//           const data = snapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }));
//           setProportions(data);
//         })
//     }, []);
//     console.log(proportions)
//     return proportions

// }