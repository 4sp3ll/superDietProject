// import React, { ReactElement } from 'react'
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';
// import { firestore } from '../../../firebase/firebase'

// import { useCollectionData } from 'react-firebase-hooks/firestore';


// const UserProportions = () => {
//     const proportionsRef = firestore.collection('userProportions')
//     const query = proportionsRef
//     const [proportions] = useCollectionData(query, {idField: 'id'})

//     return (
//         <div>
//             {proportions && proportions}
//         </div>
//     )
// }

// export default UserProportions

import React, { ReactElement } from 'react'
import 'firebase/firestore'
import {firestore} from '../../../firebase/firebase'
interface Props {
    uid: any
}

 const userProportions = (uid: any) => {

    firestore.collection('userProportions').doc(uid)
    .onSnapshot(function(doc) {
        var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        console.log(source, " data: ", doc.data());
        return {
            source,
            data: doc.data()
        }

    });

    // unsubscribe();

}

export default userProportions