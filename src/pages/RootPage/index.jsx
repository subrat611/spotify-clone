import React from "react";

import style from "./rootpage.module.css";

function RootPage() {
  return (
    <div className={style.root_container}>
      <div className={style.logo_container}>
        <img src="../../src/assets/icons/spotify.png" className={style.logo__img} />
        <span className={style.logo__title}>Spotify</span>
      </div>
      <div className={style.btn_container}>
        <button className="btn btn--signup">SIGN UP</button>
        <button className="btn btn--login">LOG IN</button>
      </div>
    </div>
  );
}

export default RootPage;
