export function sortDataAlphabetically(array) {
    return array.sort((a, b) => {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1;
        if (nameA > nameB)
            return 1;
        return 0 //default return value (no sorting)
    })
}


export function checkIfAdmin(UID, setError, error) {
    firestore.collection('user').doc('admin').get()
        .then(res => res.data().UID)
        .then(adminUID => {
            if (adminUID === UID) {
                console.log("admin")
                window.location = "/#/add-data"
            } else {
                Error('You are not the admin, Login as Admin')
            }
        })
        .catch(e => {
            setError({
                message: e.message,
                statusCode: 401
            })
            throw error;
        })
}



