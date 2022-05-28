
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const MakeAAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    // const { token } = useAuth();

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://immense-sierra-48732.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
               
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }

            })
        e.preventDefault()

    }
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    return (
        <div>
            <h2>Make an Admin </h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                  
                    label="Email"
                    onBlur={handleOnBlur}
                    type="email"
                    variant="standard" />
                <button type="submit" variant="contained">Make Admin</button>
            </form>
            {success && toast('Made admin Successfully!') }
        </div>
    );
};
export default MakeAAdmin;