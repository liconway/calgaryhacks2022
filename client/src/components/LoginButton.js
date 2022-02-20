import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

function LoginButton() {

    const handleLogin = async (googleData) => {
        const res = await fetch(`${process.env.API_URL}/auth/login`, {
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
            window.location.href = "/journal";
        }
    }

    const errorResponseGoogle = (response) => {
        console.log("Error: unable to login with Google Authentication.");
        console.log(response);
    }

    return (
        <div>
        <GoogleLogin
            clientId={process.env.GOOGLE_CLIENT_ID}  // your Google app client ID
            onSuccess={handleLogin}
            onFailure={errorResponseGoogle}
            buttonText="Sign in with Google"
        />
        </div>
    );
}

export default LoginButton;