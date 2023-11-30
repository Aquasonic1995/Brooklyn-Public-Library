import React, { useState } from "react";
import s from "./About.module.scss";
import abo1 from "../../img/about-image-1.png";
import abo2 from "../../img/about-image-2.png";
import abo3 from "../../img/about-image-3.png";
import arrow from "../../img/Carret_Left.png";
function About() {
  const [isActive, setIsActive] = useState(true);
  return (
    <section className={s.about} id="about">
      <h2>About</h2>
      <div className={s.some_text}>
        The Brooklyn Library is a free workspace, a large number of books and a
        cozy coffee shop inside
      </div>

      <div className={s.images}>
        <img src={arrow} alt="arrow-left" />
        <img src={abo1} alt="abo1" />
        <img src={abo2} alt="abo2" />
        <img src={abo3} alt="abo3" />

        <img src={arrow} alt="arrow-right" />
      </div>
      <div className={s.carousel_pagination}>
        <div
          className={isActive ? s.carousel_button_active : s.carousel_button}
          onClick={() => {
            setIsActive(!isActive);
          }}
        />
        <div className={s.carousel_button} />
        <div className={s.carousel_button} />
        <div className={s.carousel_button} />
        <div className={s.carousel_button} />
      </div>
    </section>
  );
}

export default About;
