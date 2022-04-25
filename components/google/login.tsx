import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';

const MyGoogleLogin = () => {
const responseGoogle = (response: any) => {
    console.log(response);
}
return (
<GoogleLogin
    clientId="627433171674-ipfft1f0lom7miko0o8gu2uha6cov9ks.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy="single_host_origin"
  />
)
}

export default MyGoogleLogin;