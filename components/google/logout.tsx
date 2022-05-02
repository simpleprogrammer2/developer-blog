import React from 'react'
import GoogleLogout from 'react-google-login';

const MyGoogleLogout = () => {
const onSuccess = () => {
   alert('Logged out of account successfully.')
}

return (
    <div>
        { <GoogleLogout
            clientId="627433171674-ipfft1f0lom7miko0o8gu2uha6cov9ks.apps.googleusercontent.com"
            buttonText="Sign Out"
            onSuccess={onSuccess}
        />}
    </div>)
}

export default MyGoogleLogout;