import React from 'react';
import { useAsync } from "react-async";
import { Navigate } from 'react-router-dom';

async function RequireAuth ({children}) {
    const endpoint = 'https://ch22-api.herokuapp.com/auth';
    const endpoint2 = 'http://localhost:1234/auth/';

    const handleLogin = async () => {
        const res = await fetch(endpoint2, {
            credentials: 'include',
            method: "GET",
        });
        return res;
    }
    const { res, error } = useAsync({ promiseFn: handleLogin });
    return (res.status === 200 ? children : <Navigate to="/" replace />);
}

export default RequireAuth;