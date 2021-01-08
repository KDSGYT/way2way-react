import { firebaseAuth, firestore } from '../Util/firebase';


export function sortDataAlphabetically(array: any) {
    return array.sort((a: any, b: any) => {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1;
        if (nameA > nameB)
            return 1;
        return 0 //default return value (no sorting)
    })
}

export async function createUser(data: any, password:string) {
    await firebaseAuth.createUserWithEmailAndPassword(data.email, password)
        .then(async (user: any) => {
            // Signed in 
            const UID = user.user.uid;
            await addUserToDB(UID, data)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error)
        });
}

async function addUserToDB(UID: string, data: any) {
    const collection = firestore.collection('users');
    await collection.doc(UID).set(data)

}

function getUserFromDB() {

}

export async function getData(setState: any) {
    const newState: any = []
    const data = await firestore.collection('agencies').get()
    await data.forEach((doc) => newState.push(doc.data()))
    setState(newState)
    return;
}

// export function checkIfAdmin(UID, setError, error) {
//     firestore.collection('user').doc('admin').get()
//         .then(res => res.data().UID)
//         .then(adminUID => {
//             if (adminUID === UID) {
//                 console.log("admin")
//                 window.location = "/#/add-data"
//             } else {
//                 Error('You are not the admin, Login as Admin')
//             }
//         })
//         .catch(e => {
//             setError({
//                 message: e.message,
//                 statusCode: 401
//             })
//             throw error;
//         })
// }



