import firebase, { firebaseAuth, fireStorage, firestore, googleProvider } from '../Util/firebase';

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
    firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(async () => await firebaseAuth.createUserWithEmailAndPassword(data.email, password))
        .then(async () => {
            const currentUser: any = await firebaseAuth.currentUser;
            await currentUser.updateProfile(data)
            // .then((res: any) => console.log(res))
        })
        // .then(() => firebaseAuth.currentUser)
        // .then(async () => console.log(await firebaseAuth.currentUser))
        .catch((error) => console.error(error))

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
export async function loginUser(email: string, password: string, setState: any, setSignOut: any, type: string, rememberUser: boolean) {
    const persistenceType: string = (rememberUser ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION)
    firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(async () => {
            if (type === "email") {
                await firebaseAuth.signInWithEmailAndPassword(email, password)

            } else if (type === "google") {
                await firebaseAuth.signInWithRedirect(googleProvider)
            }
        })
        .then(() => setSignOut(false))
        .catch((error) => {
            console.log(error)
        });
}

/**
 * Retrieves the data from DB using UID received after login
 * @param UID UserID unique to a project
 * @param setState set global state for user info
 */
export async function getUserFromDB(UID: string, setState: any) {
    const currentUser = await firebaseAuth.currentUser
    await setState(currentUser)
}

/**
 * Retrieve data from DB for the list of agencies
 * @param setState Sets data for agencies
 */
export async function getData(setState: any) {
    const newState: any = []
    const data = await firestore.collection('agencies').get()
    await data.forEach((doc) => newState.push(doc.data()))
    await setState(newState)
    return;
}

/**
 * Send password reset link
 */
export async function forgotPassword(emailAddress: string) {

    firebaseAuth.sendPasswordResetEmail(emailAddress).then(function () {
        // Email sent.
        console.log('password-reset Links sent')
    }).catch(function (error) {
        // An error happened.
    });
}


export async function getAdData(AID: string, setState: any) {

    await firestore.collection('ads').doc(AID).get()
        .then(async (res) => res.data())
        .then(async (res: any) => await setState(res))
        .catch(err => console.log(err))
}


/**
 * Uploads the image to the database and returns the url of the image
 * @param image File that is uploaded by the user
 * @param UID User id of the user 
 */
export async function getImageUrl(image: any, UID: string, setImageUrl: any) {
    const storageRef = fireStorage.ref();

    // upload file to the images folder
    const uploadTask = storageRef.child(`images/${UID}/${image.name}`).put(image)
    // get progress of  upload file
    await uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot): any => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, (error) => {
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;


                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
            // get download url when download is finished
        }, async () => {
            await uploadTask.snapshot.ref.getDownloadURL()
                .then(async (downloadURL) => await setImageUrl(downloadURL))
        }
    )

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



