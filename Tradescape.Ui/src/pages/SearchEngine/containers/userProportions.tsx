// import React, { ReactElement } from 'react'
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';
// import { firestoreStart } from '../../../firebase/firebase'

// import { useCollectionData } from 'react-firebase-hooks/firestore';


// const UserProportions = () => {
//     const proportionsRef = firestoreStart.collection('userProportions')
//     const query = proportionsRef
//     const [proportions] = useCollectionData(query, {idField: 'id'})

//     return (
//         <div>
//             {proportions && proportions}
//         </div>
//     )
// }

// export default UserProportions

import React, { ReactElement, useState } from 'react'
import 'firebase/firestore'
import {firestoreStart} from '../../../firebase/firestoreConfig'
interface Props {
    uid: string
}


const UserProportions = ({uid}: Props) => {
     const [state, setState]: any = useState()

     console.log(typeof uid)

    firestoreStart.collection('userProportions').doc(uid)
    .onSnapshot(function(doc) {
        var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        // setState(`${source} "data: "  ${JSON.stringify(doc.data())}`)
        // listener prawdopodobnie nie jest przystosowany do takiego działania bo te dane wysyłane są cały czas na nowo, zmieniasz stan i tworzysz pętle
        setState(doc.data())
    })

    // unsubscribe();

    return (
        <div>
            <p>test</p>
            {state && state.Kcal}
        </div>
    )

}

export default UserProportions