import React from 'react';
import { useAsync } from "react-async";
import { Navigate } from 'react-router-dom';

async function RequireAuth ({children}) {
    const handleLogin = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/auth`, {
            credentials: 'include',
            method: "GET",
        });
        return res;
    }
    const { res, error } = useAsync({ promiseFn: handleLogin });
    return (res.status === 200 ? children : <Navigate to="/" replace />);
}

export default RequireAuth;