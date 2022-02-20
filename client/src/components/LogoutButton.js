import { GoogleLogout } from 'react-google-login';

function LogoutButton() {

    const onSuccess = (res) => {
        console.log('Logout Success ');
    };

    return (
        <GoogleLogout
            clientId={process.env.GOOGLE_CLIENT_ID}  // your Google app client ID
            buttonText="Sign Out"
            onLogoutSuccess={onSuccess}
        />
    );
}

export default LogoutButton;