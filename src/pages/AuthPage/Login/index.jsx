import { Link } from "react-router-dom";
import logo from "../../../assets/icons/spotify.png";

import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.header__container}>
        <img src={logo} alt="app-logo" className={styles.logo} />
        <span className={styles.logo__title}>Spotify</span>
      </div>
      <div className={styles.input__form}>
        <div className={styles.input__email}>
          <label htmlFor="InputEmail" className={styles.field__label}>
            Email address
          </label>
          <input id="InputEmail" type="email" placeholder="Email address" />
        </div>
        <div className={styles.input__passwd}>
          <label htmlFor="InputPasswd" className={styles.field__label}>
            Password
          </label>
          <input id="InputPasswd" placeholder="Password" type="password" />
        </div>
        <div className={styles.login__controller__btn}>
          <button className={`${styles.btn__login} btn btn--login`}>
            LOG IN
          </button>
        </div>
        <Link to="/signup" className="info--link">
          <span>Don't have an account?</span>
        </Link>
      </div>
    </div>
  );
}
