import firebase, { firebaseAuth, firebaseDB, fireStorage, firestore, googleProvider } from '../Util/firebase';

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
export async function createUser({ email }: any, password: string) {
    // body of the function 
    firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)

        /**
             * creating user with email and password only returns error nothing else
             */
        .then(async () => await firebaseAuth.createUserWithEmailAndPassword(email, password))
        // .then(() => )
        .catch((error) => console.error(error))

}



/**
 * Adds user data to the DB to be used afterwards
 * @param UID UserID that is unique to the project
 * @param data User data to be sent to the DB
 */
export async function addUserToDB(data: any, setUserData: any) {
    const currentUser: any = firebaseAuth.currentUser;
    const collection = firebaseDB.ref('users/' + currentUser.uid);
    await collection.set(data)
        .then(async () => await setUserData(data))
        .then(() => console.log('Worked'))
        .catch((e) => console.log(e))
}


/**
 * Login the user with simple email and password login credentials
 * @param email Login Credentials
 * @param password Login predentials
 * @param setState set global state for data that is received
 * @param setSignOut set the global state is the user is signed out or not
 */
export async function loginUser(email: string, password: string, CTX: any, type: string, rememberUser: boolean, setError: any) {

    // const persistenceType: string = (rememberUser ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION)
    // let error;
    firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(async () => {
            if (type === "email") {
                return await firebaseAuth.signInWithEmailAndPassword(email, password)
            } else if (type === "google") {
                return await firebaseAuth.signInWithRedirect(googleProvider)
            }
        })
        .then((user: any) => user.user.uid)
        .then(async (UID) => await getUserFromDB(UID, CTX.setUserData))
        .then(() => CTX.setSignOut(false))
        .catch((err) => {
            // error handling when the user enters wrong password or something else went wrong
            switch (err.code) {
                case 'auth/wrong-password':
                    setError('Invalid Credentials');
                    break;
                default:
                    setError('Bummer, Something Went Wrong')
            }
        });


    // if (error !== undefined) {
    // }
}


/**
 * Reset pass
 * @param emailAddress string
 */
export async function forgotPassword(emailAddress: string) {

    firebaseAuth.sendPasswordResetEmail(emailAddress).then(function () {
        // Email sent.
        console.log('password-reset Link sent')
    }).catch(function (error) {
        // An error happened.
    });
}

/**
 * Retrieves the data from DB using UID received after login
 * @param UID UserID unique to a project
 * @param setState set global state for user info
 */
export function getUserFromDB(UID: string, setState: any, setError: any = "") {

    const {
        uid = UID
    }: any = firebaseAuth.currentUser;

    firebase.database().ref('/users/' + uid).once('value')
        .then((snapshot) => {
            setState(snapshot.val())
        })
        .catch((e) => {
            setError('User not found')
        })

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
            console.log(error)
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

/**
 * Create the post in the DB to be accesssed later
 * @param postData Post data entered by the user
 */
export function createPost(postData: object) {
    console.log("Creating")
    firestore.collection('ads').doc().set(postData)
        .then(() => console.log('it worked'))
        .catch((e) => console.log(e))
}


/**
 * Get data from the database
 */
export async function getAds(setAds: any) {
    const snapshot = await firestore.collection('ads').get();
    const data: any = [];
    snapshot.forEach(element => {
        data.push(element.data());//need to find a way to send the post id to the state to be displayed
    });
    await setAds(data)
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
