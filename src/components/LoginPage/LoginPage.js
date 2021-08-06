import { auth, firebase } from "../../firebase/config";
import "./loginpage.css";

const onSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

const LoginPage = () => {
  return (
    <div className="login-page container-fluid">
      <div className="logo"></div>
      <div className="opportunities">Opportunities Everywhere</div>
      <div className="palibot-helps">
        Palibot helps you see what you and other people are looking for, and
        they’re just around you!
      </div>
      <div className="login">Log in with Google</div>
      <button onClick={onSignIn} className="login-button">
        Enter Palibot
      </button>
    </div>
  );
};

export default LoginPage;
