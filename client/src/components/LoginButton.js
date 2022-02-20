import React, { useState } from 'react';

import { GoogleLogin } from 'react-google-login';

function LoginButton() {

    const clientId = '518828783452-4vdk5panaua9s8entiv5ljoqvbo7l4j5.apps.googleusercontent.com'
    const endpoint = 'http://localhost:3000/post/auth';

    const handleLogin = async (googleData) => {
        const res = await fetch(endpoint, {
            method: "POST",
            body: JSON.stringify({
            token: googleData.tokenId
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        
        const data = await res.json();
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
            isSignedIn={true}
        />
        </div>             
    );
}

export default LoginButton;