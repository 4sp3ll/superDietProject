import { firestoreStart } from './firestoreConfig'
import firebase from 'firebase/app';
import 'firebase/firestore'

export default function deleteDate(date: string, uid: string) {
    const dateRef = firestoreStart.collection('userProducts').doc(uid)

    dateRef.update({
        [date]: firebase.firestore.FieldValue.delete()
    }).then(() => {
        console.log("Document successfully updated!");
    }).catch((error) => {
        console.error("Error updating document: ", error);
    });
}