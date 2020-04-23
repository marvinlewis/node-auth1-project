import React, { useEffect } from 'react';
import axios from 'axios';

const Users = () => {

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <h1>Welcome to the Users page</h1>
        </div>
    )
}

export default Users;