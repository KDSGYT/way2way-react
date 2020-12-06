import React from 'react'
import firebase, { firestore } from '../../Util/firebase'
export default function AddData() {

    const [name, setName] = React.useState('');
    const [phoneNumber, setphoneNumber] = React.useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setphoneNumber(e.target.value);

    // React.useEffect(() => {

    // }, [name, phoneNumber])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            phone: phoneNumber
        }
        firestore.collection('agencies').doc().set(data)
            .then ((res) => console.log("worked"))
            .catch((e) => console.error("did"))
        // const db = firestore.collection('users');
        // db.get()
        //     // .then((res) => res.json())
        //     .then( res =>  console.log(res))
        //     .catch(e => console.error(e))
    }

    return (
        <section id="add-data">
            <h1>Add data to firebase</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={handleNameChange} />
                <label>Phone</label>
                <input type="text" value={phoneNumber} onChange={handlePhoneChange} />
                <input type="submit" />
            </form>
        </section>
    )
}