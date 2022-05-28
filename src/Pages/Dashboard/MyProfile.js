import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    
    return (
        <div className='items-center py-10'>
            <h2 className=" text-center font-bold text-2xl">Name : {user?.displayName}</h2>
        <h2 className=" text-center font-bold text-2xl">Email : {user?.email}</h2>
        </div>
    );
};

export default MyProfile;