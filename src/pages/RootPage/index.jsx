import { Link } from "react-router-dom";

import style from "./rootpage.module.css";

import logo from "../../assets/icons/spotify.png";

function RootPage() {
  return (
    <div className={style.root_container}>
      <div className={style.logo_container}>
        <img src={logo} className={style.logo__img} />
        <span className={style.logo__title}>Spotify</span>
      </div>
      <div className={style.btn_container}>
        <Link to="/signup">
          <button className="btn btn--signup">SIGN UP</button>
        </Link>
        <Link to="/login">
          <button className="btn btn--login">LOG IN</button>
        </Link>
      </div>
    </div>
  );
}

export default RootPage;
