import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { login } from "../services/authService";
import styles from "./EventForm.module.css";

const GoogleLoginComponent = ({ setUser }) => {
  const onSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse;
    const user = await login(credential);
    setUser(user);
  };

  const onFailure = (error) => {
    console.error(error, "google");
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className={styles.login}>
        <p className="App-header">Sign in with Google</p>
        <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginComponent;
