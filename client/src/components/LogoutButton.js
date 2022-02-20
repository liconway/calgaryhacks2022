import { GoogleLogout } from 'react-google-login';
const clientId = '518828783452-4vdk5panaua9s8entiv5ljoqvbo7l4j5.apps.googleusercontent.com'

function LogoutButton() {

    const onSuccess = (res) => {
        console.log('Logout Success ');
    };

    return (                
        <GoogleLogout
            clientId={clientId}  // your Google app client ID
            buttonText="Sign Out"
            onLogoutSuccess={onSuccess}
        />
    );
}

export default LogoutButton;