import { Link } from "react-router-dom";
import logo from "../../../assets/icons/spotify.png";

import styles from "./signup.module.css";

export default function Signup() {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.header__container}>
        <img src={logo} alt="app-logo" className={styles.logo} />
        <span className={styles.logo__title}>Spotify</span>
      </div>
      <div className={styles.input__form}>
        <div className={styles.input__email}>
          <label htmlFor="InputEmail" className={styles.field__label}>
            What's your email?
          </label>
          <input id="InputEmail" type="email" placeholder="Enter your email." />
        </div>
        <div className={styles.input__confirmEmail}>
          <label htmlFor="InputConfirmEmail" className={styles.field__label}>
            Confirm your email
          </label>
          <input
            id="InputConfirmEmail"
            type="email"
            placeholder="Enter your email again."
          />
        </div>
        <div className={styles.input__passwd}>
          <label htmlFor="InputPasswd" className={styles.field__label}>
            Password
          </label>
          <input
            id="InputPasswd"
            placeholder="Create a password."
            type="password"
          />
        </div>
        <div className={styles.input__profilename}>
          <label htmlFor="InputProfileName" className={styles.field__label}>
            What should we call you?
          </label>
          <input
            id="InputProfileName"
            placeholder="Enter a profile name."
            type="text"
          />
        </div>
        <div className={styles.input__gender}>
          <span className={styles.field__label}>What's your gender?</span>
          <div className={styles.radio__field__container}>
            <div>
              <input
                id="genderMale"
                type="radio"
                value="male"
                name="inputGender"
              />
              <label className={styles.radio__label} htmlFor="genderMale">
                Male
              </label>
            </div>
            <div>
              <input
                id="genderFemale"
                type="radio"
                value="female"
                name="inputGender"
              />
              <label className={styles.radio__label} htmlFor="genderFemale">
                Female
              </label>
            </div>
            <div>
              <input
                id="genderOther"
                type="radio"
                value="female"
                name="inputGender"
              />
              <label className={styles.radio__label} htmlFor="genderOther">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className={styles.signup__controller__btn}>
          <button className={`${styles.btn__signup} btn btn--login`}>
            Sign up
          </button>
        </div>
        <Link to="/login" className="info--link">
          <span>Have an account?</span>
        </Link>
      </div>
    </div>
  );
}
