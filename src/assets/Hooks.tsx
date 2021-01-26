import { useContext, useState } from 'react';
import UserCTX from '../CTX/CTX';
import { getImageUrl } from './functions';

/**
 * Get signout information about user.
 * See if the user is signed out or not?
 */
export function useUserSignedOut() {
    const CTX: any = useContext(UserCTX)
    return ([CTX.signOut, CTX.setSignOut])
}

/**
 * Get user Data from the global state
 */
export function useUserData() {
    const CTX: any = useContext(UserCTX)
    return ([CTX.userData, CTX.setUserData])

}


export function useGetImageUrl(image: any) {
    const [imageUrl, setImageUrl] = useState("");
    const [userData] = useUserData();
    getImageUrl(image, userData.uid, setImageUrl);
    return [imageUrl]
}