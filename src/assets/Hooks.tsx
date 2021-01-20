import React, { useContext } from 'react';
import UserCTX from '../CTX/CTX';

function useUserSignedOut() {
    const context: any = useContext(UserCTX)
    return ([context.signOut, context.setSignOut])
}