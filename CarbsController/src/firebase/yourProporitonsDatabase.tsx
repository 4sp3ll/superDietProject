import { useSelector } from 'react-redux'
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