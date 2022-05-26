import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    
    return (
        <div>
            <h2 className="card-title">Name : {user?.displayName}</h2>
        <h2 className="card-title">Email : {user?.email}</h2>
        </div>
    );
};

export default MyProfile;