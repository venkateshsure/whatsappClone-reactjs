import React from "react";
import { Button } from "@material-ui/core";
import "./index.css";

import { auth, provider } from "../../firebase";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"
          alt="whatsApp"
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        Sonny Sangha
        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}
export default Login;
