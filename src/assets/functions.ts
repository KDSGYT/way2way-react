import firebase, { firebaseAuth, firestore, googleProvider } from '../Util/firebase';

/**
 * Arrange array elements alphabetically 
 * @param array 
 */
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

/**
 * Create a new user using email password
 * @param data Object Contains user data
 * @param password string 
 */
export async function createUser(data: any, password: string) {
    await firebaseAuth.createUserWithEmailAndPassword(data.email, password)
        .then((user: any) => user.user.uid)
        .then(async (UID: string) => await addUserToDB(UID, data))
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(error)
        });
}

/**
 * Adds user data to the DB to be used afterwards
 * @param UID UserID that is unique to the project
 * @param data User data to be sent to the DB
 */
async function addUserToDB(UID: string, data: any) {
    const collection = firestore.collection('users');
    await collection.doc(UID).set(data)
}

/**
 * Login the user with simple email and password login credentials
 * @param email Login Credentials
 * @param password Login predentials
 * @param setState set global state for data that is received
 * @param setSignOut set the global state is the user is signed out or not
 */
export async function loginUser(email: string, password: string, setState: any, setSignOut: any, type: string) {
    firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(async () => {
            if (type === "email") {
                await firebaseAuth.signInWithEmailAndPassword(email, password)

            } else if (type === "google") {
                await firebaseAuth.signInWithPopup(googleProvider)
            }
        })
        .then((res: any) => res.user.uid)
        .then(async (UID: string) => await getUserFromDB(UID, setState))
        .then(() => setSignOut(false))
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(error)
        });
}

/**
 * Retrieves the data from DB using UID received after login
 * @param UID UserID unique to a project
 * @param setState set global state for user info
 */
export async function getUserFromDB(UID: string, setState: any) {
    const DataRef = firestore.collection('users').doc(UID);
    const doc = await DataRef.get()
    if (!doc.exists) { console.log('no such document') }
    else {
        setState(doc.data())
        // console.log(doc.data())
    }
}

/**
 * Retrieve data from DB for the list of agencies
 * @param setState Sets data for agencies
 */
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



