import React, { useState } from 'react'
import GoogleLogin from 'react-google-login';
import refreshTokenSetup from './refreshTokenSetup'

const MyGoogleLogin = () => {
const [loggedState, setLoggedState] = useState(false);
const onSuccess = (response: any) => {
    console.log(response.profileObj);
    refreshTokenSetup(response);
    setLoggedState(true);
}
const onFailure = (response: any) => {
  console.log(response);
}
return (
  <div>
    {loggedState ? <div /> : <GoogleLogin
        clientId="627433171674-ipfft1f0lom7miko0o8gu2uha6cov9ks.apps.googleusercontent.com"
        buttonText="Sign In"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        style={{ marginTop: '100px'}}
        isSignedIn={true}
      />}
  </div>
)
}

export default MyGoogleLogin;