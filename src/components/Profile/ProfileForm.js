import { useContext, useRef } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const newPassswordInput = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredNewPassword = newPassswordInput.current.value;
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBVs60kT1EZCPtYuPeZu1Y6-7mBgKwJnfM",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authCtx.token,
            password: enteredNewPassword,
            returnSecureToken: false,
          }),
        }
      );

      if (res.ok) {
        const data = await res.json();

        authCtx.login(data.idToken);
      } else {
        let errorMsg = "Password Changed Failed";
        const data = await res.json();
        if (data.error.message) {
          errorMsg = data.error.message;
        }
        throw new Error(errorMsg);
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPassswordInput}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
