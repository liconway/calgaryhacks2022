import React, { useState } from 'react';

import { GoogleLogin } from 'react-google-login';

function LoginButton(props) {

    const clientId = '518828783452-4vdk5panaua9s8entiv5ljoqvbo7l4j5.apps.googleusercontent.com'
    const endpoint = 'https://ch22-api.herokuapp.com/auth/login';
    const endpoint2 = 'http://localhost:1234/auth/login';

    const handleLogin = async (googleData) => {
        const res = await fetch(endpoint2, {
            credentials: 'include',
            method: "POST",
            body: JSON.stringify({
                token: googleData.tokenId
            }),
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (res.status != 200) {
            console.log("Sending failed. Please try again.");
        } else {
            // Redirect 
            props.setLoggedIn(true);
        }
    }

    const errorResponseGoogle = (response) => {
        console.log("Error: unable to login with Google Authentication.");
    }
    
    return (   
        <div>
        <GoogleLogin
            clientId={clientId}  // your Google app client ID
            onSuccess={handleLogin}
            onFailure={errorResponseGoogle}
            buttonText="Sign in with Google"
        />
        </div>             
    );
}

export default LoginButton;