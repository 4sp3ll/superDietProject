import { firestoreStart } from './firestoreConfig'
import 'firebase/firestore'


export default function updateProductQuantity(date: string, productId: string, uid: string, inputValue: number | undefined) {
    const dateRef = firestoreStart.collection('userProducts').doc(uid)

    if (inputValue !== undefined) {
        dateRef.update({
            [`${date}.${productId}.quantity`]: inputValue
        }).then(() => {
            console.log("Document successfully updated!");
        }).catch((error) => {
            console.error("Error updating document: ", error);
        });

    }
}

