import React from "react";

import { auth, provider } from "../../firebase";

import { actionTypes } from "../../reducer";

import { useStateValue } from "../../StateProvider";

import { Button } from "@material-ui/core";

import "./index.css";

function Login() {
  const [dispatch] = useStateValue();
<<<<<<< HEAD
  // const [{ user }, dispatch] = useStateValue();
=======
  //  const [{}, dispatch] = useStateValue();
>>>>>>> e03d802ad91b1e5e44abcc23dbf953813054949d
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
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

        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}
export default Login;
