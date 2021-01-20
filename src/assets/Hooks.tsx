import React, { useContext } from 'react';
import UserCTX from '../CTX/CTX';

/**
 * Get signout information about user.
 * See if the user is signed out or not?
 */
export function useUserSignedOut() {
    const context: any = useContext(UserCTX)
    return ([context.signOut, context.setSignOut])
}