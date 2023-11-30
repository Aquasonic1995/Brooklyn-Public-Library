import React from "react";
import s from "./DigitalLibraryCards.module.scss";

function DigitalLibraryCards() {
  return (
    <section className={s.cards} id="library-card">
      <h2>Digital Library Cards</h2>
      <div className={s.card_form}>
        <div className={s.form}>
          <div className={s.title}>Find your Library card</div>
          <div className={s.wrapper}>
            <div className={s.body}>
              <span> Brooklyn Public Library</span>
              <input type="text" placeholder="Reader's name" />
              <input type="text" placeholder="Card number" />
            </div>
            <button>Check the card</button>
          </div>
        </div>
        <div className={s.sign_up}>
          <p>Get a reader card</p>
          <p>
            You will be able to see a reader card after logging into account or
            you can register a new account
          </p>
          <br />
          <div className={s.buttons}>
            <button>Sign up</button>
            <button>Log in</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalLibraryCards;
