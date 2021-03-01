import { firestoreStart } from './firestoreConfig'

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
