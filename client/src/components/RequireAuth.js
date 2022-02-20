import React from 'react';
import { Navigate } from 'react-router-dom';
function RequireAuth({loggedIn, children}) {
    return (loggedIn === true ? children : <Navigate to="/" replace />);
}

export default RequireAuth;