export const signup = (data: any) => async (dispatch: any, getState: any, {getFirebase, getFirestore}: any) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    try {
        const res = await firestore
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)

        console.log(res)
    } catch (err) {}
}