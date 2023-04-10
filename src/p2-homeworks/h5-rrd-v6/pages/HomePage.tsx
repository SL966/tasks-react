import React from "react";
import s from "./Pajes.module.css";
import Glitch from "./Glitch/Glitch";

function HomePage() {

  return (
    <div>
      <div className={s.home_page}><Glitch/></div>

    </div>
  );
}

export default HomePage;

